import bcrypt from "bcryptjs"
import User from "../models/User.js"
import generateToken from "../Utils/generateToken.js"

export const RegisterUser = async (req,res) => {
    try {
        const {name,email,password} = req.body
        if(!name||!email||!password){
            return res.status(400).json({message:"Please Fill in all the fields!"})
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"Email Already registered"})
        }

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password,salt)

        const user = await User.create({
            name,
            email,
            password:passwordHash
        })

        const token = generateToken(user._id)

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

export const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email||!password){
            return res.status(400).json({message:"Please provide email and password"})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"Email not found!"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(401).json({message:"Invalid Password"})
        }

        const token = generateToken(user._id)

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token
        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}