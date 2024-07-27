import foodModel from "../models/foodModel.js";
import fs from "fs"

// Add Food Items

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    console.log(req.body)
    try {
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: image_filename,
            category: req.body.category
        })

        await food.save();
        res.json({ success: true, message: "Food Added Successfully" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Food is not Added" })

    }

}


//all food List
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}


// remove food items
const removeFood = async (req, res) => {
try {
    const food = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`, ()=> {})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success: true, message: "Food Removed"})

} catch (error) {
    console.log(error)
    res.json({success: false, message: "Food is not Removed"})

}
}
export { addFood, listFood, removeFood }
