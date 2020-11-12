const mongodb = require('mongoose');
const productSchemaImport = require('./productSchema');

exports.getAllProducts = (req, res) => {
    productSchemaImport.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to retrieve products.',
        error: err,
    }))
}

exports.getOneProduct = (req, res) => {
    productSchemaImport.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to retrieve product.',
        error: err,
    }))
}

exports.createProduct = (req, res) => {
    productSchemaImport.find({ name: req.body.name })
    .then(exists => {
        if(exists.length > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Failed to create item. Item cannot be a duplicate of existing item.',
            })
        }

        const product = new productSchemaImport({
            name: req.body.name,
            short: req.body.short,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image,
        })
        product.save()
        .then(() => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Product created',
            })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500,
                status: true,
                message: 'Product has not been created',
            })
        })
    })
}

exports.updateProduct = ( req, res ) => {
    productSchemaImport.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
        productSchemaImport.updateOne( { _id: req.params.id }, { $set: { modified: Date.now() } } )
        .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Product Updated Successfully.'
            })
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: true,
            message: 'Product Update failed.'
        })
    })
}

exports.deleteProduct = ( req, res ) => {
    productSchemaImport.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Product deletion successful.'
        })
    })
    .catch(() => {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Product deletion failed.'
        })
    })

}