require("../models/product");
const {success, fail} = require("../utils/response");
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const api = require('express').Router();

api.get('/product', async (req, res) => {
    try {
        const product = await Product.find({});

        return res.json(success(product));
    } catch (err) {
        res.json(fail(err.message));
    }
});

api.post('/product', async (req, res) => {
    const {name} = req.body;

    try {
        const newProduct = new Product({name});

        const savedProduct = await newProduct.save();

        return res.json(success(savedProduct.toJSON()));
    } catch (err) {
        res.json(fail(err.message));
    }
});

module.exports = api;