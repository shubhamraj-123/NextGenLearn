import { response } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

export const register = async (req, res) => {
  const passwordRegex = /^[A-Z][A-Za-z\d@$!%*?&]{7,}$/; // First letter uppercase, total 8+ characters
  try {
    // console.log(req.body);
    const { name, email, password, role } = req.body; // shubham214
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    if (
      !passwordRegex.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[@$!%*?&]/.test(password)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must start with an uppercase letter, contain lowercase letters, at least one number, one symbol, and be at least 8 characters long.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // salt no=10 default
    // like random has kr ke password dega vhygyty@4# kuchh bhi

    // creaing user with registration.
    await User.create({
      name,
      email,
      password: hashedPassword,
      role,   
    });
    return res.status(201).json({
      sucess: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Failed to register",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await User.findOne({ email }); // user ka mail check krne ke liye ki exist krta h nhi, for login
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Authentication.. ek bar login kr liye, to user logged in h ya nhi, kitna der tk login h, using jwt
    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Failed to login",
    });
  }
};

export const logout = async (_, res) => {
  try {
    // return res.status(200).cookie("token", "", { maxAge: 0 }).json({
    //   message: "Logged out successfully.",
    //   success: true,
    // });
    res.clearCookie("token", {
      httpOnly: true,  // Cookie should only be accessible via HTTP requests
      sameSite: "None",  // For cross-origin requests
      secure: true,      // For production (only send over HTTPS)
    });
    return res.status(200).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Failed to logout",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.id;
    const user = await User.findById(userId)
      .select("-password")
      .populate("enrolledCourses"); // password nhi chahiye user mei se
    if (!user) {
      return res.status(404).json({
        message: "Profile not found",
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      sucess: false,
      message: "Failed to load user",
    });
  }
};
// export const updateProfile = async (req, res) => {
//   try {
//     const userId = req.id;
//     const { name } = req.body;
//     const profilePhoto = req.file;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//         success: false,
//       });
//     }
//     // extract public_Id of the old image from the url if it exists;
//     if (user.photoUrl) {
//       const publicId = user.photoUrl.split("/").pop().split(".")[0]; // extract public id
//       deleteMediaFromCloudinary(publicId);
//     }

//     // upload new photo
//     const cloudResponse = await uploadMedia(profilePhoto.path);
//     const photoUrl = cloudResponse.secure_url;

//     const updatedData = { name, photoUrl };
//     const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
//       new: true,
//     }).select("-password");

//     return res.status(200).json({
//       success: true,
//       user: updatedUser,
//       message: "Profile updated successfully.",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       sucess: false,
//       message: "Failed to update profile",
//     });
//   }
// };
export const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;
    const profilePhoto = req.file;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const updatedData = { name };

    // Only handle photo if one is uploaded
    if (profilePhoto) {
      // Delete old image if exists
      if (user.photoUrl) {
        const publicId = user.photoUrl.split("/").pop().split(".")[0];
        deleteMediaFromCloudinary(publicId);
      }

      // Upload new photo
      const cloudResponse = await uploadMedia(profilePhoto.path);
      updatedData.photoUrl = cloudResponse.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    }).select("-password");

    return res.status(200).json({
      success: true,
      user: updatedUser,
      message: "Profile updated successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};
