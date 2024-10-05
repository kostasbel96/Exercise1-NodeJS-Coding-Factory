const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productSchema = new Schema({
    product: { type: String },
    cost: { type: Number },
    description: { type: String},
    quantity: { type: Number}
},
{
    collection: 'products',
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
