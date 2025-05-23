import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  }); // sign method to generate token, secret key lega, token expire hoga 1 day mei

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      // sameSite: "strict",
      secure: true, // for production HTTPS
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    }).json({
        success: true,
        message,
        user: {
          ...user.toObject(),         // Converting Mongoose document to plain object
          password: undefined,        // & password is not sent back in the response
        },
    }); 
};
