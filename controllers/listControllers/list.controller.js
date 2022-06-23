import List from "../../models/listModel/list.model.js"


export const createList = async (req, res) => {
    const { listName, userId, productList } = req.body;
    const existList = await List.findOne({ listName });
    if (existList) {
        return res.status(404).json("List Alredy Exist")
    }
    if (!userId) {
        return res.status(404).json("User Id is requred!")
    }

    const list = await List.create({
        listName,
        userId,
        productList
    });
    if (list) {
        res.status(201).json({
            _id: list._id,
            listName: list.listName,
            userId: list.userId,
            productList: list.productList
        })
    } else {
        res.status(400).json("List creation failed")
    }
}


export const updateList = async (req, res) => {
    try {
        const updatedList = await List.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(201).json(updatedList)
    } catch (error) {
        res.status(500).json("Updated fail")
    }
}


export const deleteList = async (req, res) => {
    let { id } = req.params;
    try {
        await List.findByIdAndDelete(id)
        return res.status(200).json('List successfully deleted !')
    } catch (error) {
        res.status(500).json('List delete fail!')
    }
}


export const getLists = async (req, res, next) => {

    const { startDate, endDate } = req.body;

    try {

        const result = await List.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            },
            { $unwind: "$productList" },
            {
                $group: {
                    _id: "$productList.productName",
                    balance: { $sum: "$productList.quantity" }
                }
            },
            {
                $addFields: {
                    productName: "$_id",
                    _id: "$$REMOVE"
                }
            }
        ])
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json('Get lists fail!')
    }
}