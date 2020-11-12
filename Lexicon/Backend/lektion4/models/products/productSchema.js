const mongodb = require('mongoose');

const productSchema = mongodb.Schema({
    name:       { type: String, Required: true, unique: true},
    short:      { type: String, Required: true},
    desc:       { type: String, Required: true},
    price:      { type: String, Required: true},
    image:      { type: String, Required: true},

    created:    { type: Date, default: Date.now},
    modified:   { type: Date, default: Date.now},  
})

module.exports = mongodb.model('Product', productSchema);