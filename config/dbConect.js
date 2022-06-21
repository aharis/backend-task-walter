import mongoose from "mongoose";

const dbConect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/conects", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`DB connected Successfully`)
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

export default dbConect;