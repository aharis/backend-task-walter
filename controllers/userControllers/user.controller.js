import User from "../../models/userModel/user.model.js";


export const registerUser = async (req, res) => {
    const { email, password } = req.body; 

    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(404).json("Email Alredy Exist")
    }
    
    const user = await User.create({
        email, password
    })
    if(user) {
        res.status(201).json({
            email: user.email,
            password: user.password
        })
    }else {
        res.status(400).json("User not found!")
    }
}