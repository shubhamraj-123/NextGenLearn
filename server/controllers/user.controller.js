import { response } from "express";
import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req,res) => {
    try{
        // console.log(req.body);
        const {name, email, password} = req.body; // shubham214
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists with this email."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10); // salt no=10 default
        // like random has kr ke password dega vhygyty@4# kuchh bhi

        // creaing user with registration.
        await User.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            sucess: true,
            message: "Account created successfully."
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Failed to register"
        })
    }
}

export const login = async (req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({email}); // user ka mail check krne ke liye ki exist krta h nhi, for login
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            });
        }

        // Authentication.. ek bar login kr liye, to user logged in h ya nhi, kitna der tk login h, using jwt 
        generateToken(res, user, `Welcome back ${user.name}`);

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Failed to login"
        })
    }    
}

export const logout = async(_,res) => {
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully.",
            success:true
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Failed to logout"
        })
    }    
}

export const getUserProfile = async (req,res) => {
    try{
        const userId = req.id;
        const user = await User.findById(userId).select("-password"); // password nhi chahiye user mei se
        if(!user){
            return res.status(404).json({
                message:"Profile not found",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess: false,
            message: "Failed to load user"
        })
    }    
}