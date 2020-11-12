const mongodb = require('mongoose');
const { response } = require('../../app');
const Product = require('./productSchema');

exports.getProducts = (req,res) => {
    Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        return res.status(200).json(product)
    })
    .catch(err => {
        return res.status(500).json(err)
    })
}

exports.createProduct = (req, res) => {
    Product.find({name: req.body.name})
    .then(exists => {
        if(exists.length > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exists, please update product instead.'
            })
        }

        const inventoryProduct = new Product({
            _id: new mongodb.Types.ObjectId,
            name: req.body.name,
            short: req.body.short,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image,
        })
        inventoryProduct.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'Product created successfully'
                })
            })
            .catch (() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'failed to create product',
                })
            })

    })
}

exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params.id }, req.body)
    .then(() => {
        Product.updateOne({ _id: req.params.id }, { $set: {modified: Date.now()} } )
        .then(() => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product updates successfully'
            })
        })
    })
}

exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Successfully deleted product.",
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Fail no delete product.",
        })
    })
}