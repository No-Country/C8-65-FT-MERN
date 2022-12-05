import mongoose from "mongoose";

//Create table into DB for Category
const categorySchema = new mongoose.Schema(
    {
        value: { type: String, required: true, unique: true },
        label: { type: String, required: true, unique: true },
    },
    {
        timestamps: true, //for date
    }
);

// Category is name of table 
const Category = mongoose.model('Category', categorySchema);
export default Category;