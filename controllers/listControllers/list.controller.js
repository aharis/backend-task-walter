import List from "../../models/listModel/list.model.js"

export const createList = async (req, res) => {
    const { listName, userId, productList } = req.body;
    const existList = await List.findOne({ listName });
    if(existList) {
        return res.status(404).json("List Alredy Exist")
    }
    if(!userId) {
        return res.status(404).json("User Id is requred!")
    }

    const list = await List.create({
        listName,
        userId,
        productList
    });
    if(list) {
        res.status(201).json({
            _id: list._id,
            listName: list.listName,
            userId: list.userId,
            productList: list.productList
        })
    }else {
        res.status(400).json("List creation failed")
    }
 }


export const updateList = () => {

}

export const deleteList = () => {

}