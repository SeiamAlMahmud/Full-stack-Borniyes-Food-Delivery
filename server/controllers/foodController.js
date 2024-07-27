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
        res.json({success: true,message: "Food Added Successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false,message: "Food is not Added"})

    }

}
const getFood = async(req,res)=>{
res.json({hi: 'hello'})
}
export { addFood ,getFood}
