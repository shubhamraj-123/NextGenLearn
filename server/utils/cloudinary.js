import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
dotenv.config({}); // use environment var

cloudinary.config({
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
    cloud_name:process.env.CLOUD_NAME,
});

export const uploadMedia = async(file) => { // video or images
    try{
        const uploadResponse=await cloudinary.uploader.upload(file, {
            resource_type:"auto" // either video or photo kuchh bhi le lega
        });
        return uploadResponse;
    }
    catch(error){
        console.log(error);
    }
};

export const deleteMediaFromCloudinary = async(publicId) => { // deleted existing photo after updation
    try{
        await cloudinary.uploader.destroy(publicId);
    }
    catch(error){
        console.log(error);
    }
};

export const deleteVideoFromCloudinary = async(publicId) => { // deleted existing video after updation
    try{
        await cloudinary.uploader.destroy(publicId,{resource_type:"video"});
    }
    catch(error){
        console.log(error);
    }
};