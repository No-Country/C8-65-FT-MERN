import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true },
        precio: { type: Number },
        category: { type: String },
        slug: { type: String, unique: true },
        image: { type: String, },
        description: { type: String },
        stock: { type: Number },
        receta: { type: Boolean },
        day: { type: Boolean },
        isFavorite: { type: Boolean }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;