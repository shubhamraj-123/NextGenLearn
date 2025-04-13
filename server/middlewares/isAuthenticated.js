// after login, user will see their profile
import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            // 401-> unauthorised user
            return res.status(401).json({
                message:"User not authenticated",
                success:false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token", // token hai lekin invalid h, verfied nhi h secret key se
                success:false
            })
        }
        req.id = decode.userId
        next();
    }
    catch(error){
        console.log(error);
        
    }
};

export default isAuthenticated;
