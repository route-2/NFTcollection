import User from '../models/user.js';
import bcrypt from "bcryptjs"; //hashes the password
import jwt from "jsonwebtoken"; // creates a token
import dotenv from "dotenv";
dotenv.config();

export const signin = async (req, res) => {
    const {email,password} = req.body;
    try {
        const existingUser = await User.findOne({ email});

        if(!existingUser) {
            return res.status(404).json({message: "User doesn't exist"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        // if user exists in db

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});
        res.status(200).json({result: existingUser, token}); // send the token to the client
     

    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

export const signup = async (req, res) => {

    const {email,password,confirmPassword,firstName,lastName} = req.body;

    try {
        const existingUser = await User.findOne({email: email});

        if(existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords don't match"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
         // create a user account
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
        // create a token

        const token = jwt.sign({email: result.email, id: result._id}, 'test' , {expiresIn: "1h"});
        
        res.status(200).json({result, token}); // send the token to the client 


    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }

}
