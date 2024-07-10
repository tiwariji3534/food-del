import foodModel from "../models/foodModels.js";
import fs from 'fs'


// add food Items...

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    // to check food item is added or not in database...
    try {
        await food.save();
        res.json({success:true, message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }

}



// All food list...

const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:("Error")})
    }
}


// Remove food item....


const removeFood = async (req,res) => {

    try {
        const food = await foodModel.findById(req.body.id);      // find the image file name by unique ID
        fs.unlink(`uploads/${food.image}`, ()=>{})               // delete image from the folder

        await foodModel.findByIdAndDelete(req.body.id)           // delete the images from database..
        res.json({success:true,message:"Food Removed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:("Error")})
    }

}





export {addFood, listFood, removeFood};