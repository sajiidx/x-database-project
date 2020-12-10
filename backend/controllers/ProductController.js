const { response } = require('express')
const Product = require('../models/Product')

//Show the list of Products
const index = (req, res) => {
    Product.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured!"
        })
    })
}
const getProducts = (req, res) => {
    return Product.find()
    .then(response => {
        return response
    })
    .catch(error => {
        return error
    })
}
//show Product using ID
const show = (req, res) => {
    let ProductID = req.body.ProductID
    Product.findById(ProductID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured"
        })
    })
}
//add new Product
const store = (req, res) => {
    let product = new Product({
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        decription: req.body.decription
    })
    if(req.file){
        product.photo = req.file.path
    }
    product.save()
    .then(response => {
        res.json({
            message: 'Product Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//update an Product
const update = (req, res) => {
    let ProductID = req.body.ProductID

    let updatedData = {
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        decription: req.body.decription
    }

    Product.findByIdAndUpdate(ProductID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Product Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Product
const destory = (req, res) => {
    let ProductID = req.body.ProductID
    Product.findByIdAndRemove(ProductID)
    .then(() => {
        res.json({
            message: 'Product Deleted Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//exporting functions
module.exports = {
    index, show, store, update, destory, getProducts
}