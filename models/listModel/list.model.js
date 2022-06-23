import mongoose from "mongoose";

const listSchema = mongoose.Schema({

    listName: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    productList: [
        {
            productName: {
                type: String
            },
            quantity: {
                type: Number
            }
        }
    ]

},
    { timestamps: true }
);

const List = mongoose.model("List", listSchema);

export default List;