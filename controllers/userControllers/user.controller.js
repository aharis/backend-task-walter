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


export const loginUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "Please, insert corect email address!" })

    if (user) {
        res.json({
             email: user.email,
             password: user.password,
         });        
 
     } else {
          res.status(401).json("Invalid Password or Email")
     }
}