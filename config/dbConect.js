import mongoose from "mongoose";

const dbConect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@backend-task.hzpob.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`DB connected Successfully`)
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}

export default dbConect;