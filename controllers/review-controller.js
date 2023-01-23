const Cake = require('../models/Cake')

const getAllReviews = (req, res, next) => {
    Cake.findById(req.params.id)
    .then((cake) => {
        res.json(cake.reviews)
    }).catch(next)
}

const createReview = (req, res, next) => {
    Cake.findById(req.params.id)
    .then((cake) => {
        cake.reviews.push(req.body)
        cake.save()
            .then((p) => res.status(201).json(p.reviews))
    }).catch(next)
}

const deleteAllReviews = (req, res, next) => {
    Cake.findById(req.params.id)
        .then((cake) => {
            cake.reviews = []
            cake.save()
                .then(p => res.json(p.reviews))
        }).catch(next)
}

const getReviewById = (req, res, next) => {
    Cake.findById(req.params.id) 
        .then((cake) => {
            let review = cake.reviews
                .find((item) => item.id == req.params.review_id)
            res.json(review)
        }).catch(next)
}

const updateReviewById = (req, res, next) => {
    Cake.findById(req.params.id)
        .then(cake => {
            let updatedReviews = cake.reviews.map((item) => {
                if(item.id == req.params.review_id){
                    item.body = req.body.body //one body from schema
                }
                return item
            })
            cake.reviews = updatedReviews
            cake.save().then(p => res.json(p.reviews))
        }).catch(next)
}

const deleteReviewById = (req, res, next) => {
    Cake.findById(req.params.id)
        .then(cake => {
            let deletedReviews = cake.reviews.filter((item) => {
                return item.id != req.params.review_id
            })
            cake.reviews = deletedReviews
            cake.save().then(p => res.json(p.reviews))
        }).catch(next)
}

module.exports = {
    getAllReviews,
    createReview,
    deleteAllReviews,
    getReviewById,
    updateReviewById,
    deleteReviewById
}