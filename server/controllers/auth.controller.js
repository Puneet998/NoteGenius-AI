import UserModel from "../models/user.model.js";
import { getToken } from "../utils/token.js";


export const googleAuth = async(req,res)=>{
    try {
        const {name,email} = req.body;
        let user = await UserModel.findOne({email});
        if(!user){
            user = await UserModel.create({name,email});
        }
        const token = await getToken(user._id);//generate token with user id as payload
        res.cookie("token", token, {
            httpOnly: true,
            secure:true,
            sameSite: "none",
            maxAge: 7*24*60*60*1000
        });
        return res.status(200).json(user);
    } catch (error) {
        console.log("Error in googleAuth controller:", error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const logout = async(req,res)=>{
     try {
        res.clearCookie("token");
        return res.status(200).json({message:"Logged out successfully"});
     } catch (error) {
        console.error("Error during logout:", error.message);
        res.status(500).json({message: "Error during logout"})
     }
}
