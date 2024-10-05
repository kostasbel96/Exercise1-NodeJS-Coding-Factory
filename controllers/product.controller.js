const Product = require('../models/product.model')

exports.findAll = async(req, res) => {
    console.log("Find all products");

    try {
        const result = await Product.find()
        res.json({ status: true, data: result })
    } catch(err){
        res.json({ status:false, data: err })
    }
}

exports.findOne = async(req, res) => {
    const id = req.params.id;
    console.log("Find product with id ", id);

    try {
        const result = await Product.find({_id: id})
        res.json({ status: true, data: result })
    } catch(err){
        res.json({ status:false, data: err })
    }
}

exports.create = async(req, res) =>{
    const newProduct = new Product({
        product: req.body.product,
        cost: req.body.cost,
        description: req.body.description,
        quantity: req.body.quantity
    });
    try{
        const result = await newProduct.save();
        console.log("Product created successfully ", result);
        res.json({ status: true, data: result })
    }catch(err){
        console.log(err);
        res.json({ status: false, data: err});
    }
}

exports.update = async(req, res) =>{
    const id = req.params.id;
    console.log("Update product with id ", id);
    try {
        const result = await Product.updateOne({_id: id}, {$set:{product: "update-test"}})
        res.json({ status: true, data: result })
    } catch(err){
        res.json({ status:false, data: err })
    }
}

exports.delete = async(req, res) =>{
    const id = req.params.id;
    console.log("Delete product with id ", id);
    try {
        const result = await Product.deleteOne({_id: id})
        res.json({ status: true, data: result })
    } catch(err){
        res.json({ status:false, data: err })
    }
}