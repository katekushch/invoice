import { ProductInterface } from './product.interface';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price can`t be less than 0'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  });

const Product = mongoose.model<ProductInterface>('Product', productSchema);

export default Product;
