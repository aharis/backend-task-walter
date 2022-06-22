import express from "express";
import { createList, updateList, deleteList } from "../../controllers/listControllers/list.controller.js";

const route = express.Router();

route.post("/list", createList)
route.put("/update/:id", updateList)
route.delete("/delete/:id", deleteList)


export default route;