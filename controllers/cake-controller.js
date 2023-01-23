const Cake = require('../models/Cake');

const getAllCakes = (req, res, next) => {
    Cake.find()
        .then((cakes) => {
            res.json(cakes)
        }).catch(next)
}

const createCake = (req, res, next) => {
    let cake = {
        name: req.body.name,
        price: req.body.price,
        // owner: req.user.id,
        description: req.body.description
    }
    Cake.create(cake)
        .then((cake) => {
            res.status(201).json(cake)
        }).catch(next)
}

const deleteAllCakes = (req, res, next) => {
    Cake.deleteMany()
        .then((status) => {
            res.json(status)
        }).catch(next)
}

const getCakeById = (req, res, next) => {
    Cake.findById(req.params.id)
        .populate('category')
        .then((cake) => {
            res.json(cake)
        }).catch(next)
}

const updateCakeById = (req, res, next) => {
    Cake.findById(req.params.id)
        .then(cake => {
            if (cake.owner != req.user.id) {
                res.status(403)
                return next(new Error('Not allowed'))
            }
            cake.name = req.body.name ? req.body.name : cake.name
            cake.price = req.body.name ? req.body.name : cake.name
            // book.category = req.body.category ? req.body.category : book.category
            cake.save().then(cake => res.json(cake)).catch(next)
        }).catch(next)

    // Plant.findByIdAndUpdate(req.params.plant_id, { $set: req.body }, { new: true })
    //     .then((plant) => {
    //         res.json(plant)
    //     }).catch(next)
}

const deleteCakeById = (req, res, next) => {
    Cake.findByIdAndDelete(req.params.id)
        .then((cake) => {
            res.json(cake)
        }).catch(next)
}

module.exports = {
    getAllCakes,
    createCake,
    deleteAllCakes,
    getCakeById,
    updateCakeById,
    deleteCakeById
}