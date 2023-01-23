const express = require('express')
const router = express.Router()
const cakeController = require('../controllers/cake-controller')
const reviewController = require('../controllers/review-controller')
const { verifyUser, verifyManager, verifyAdmin } = require('../middelware/auth')


router.route('/')
    .get(cakeController.getAllCakes)
    .post(verifyUser, cakeController.createCake)
    .put((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .delete(verifyAdmin, cakeController.deleteAllCakes)

    router.route('/:id')
    .get(cakeController.getCakeById)
    .post((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .put(cakeController.updateCakeById)
    .delete(verifyAdmin, cakeController.deleteCakeById)

router.route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(verifyUser,reviewController.createReview)
    .put((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .delete(verifyAdmin, reviewController.deleteAllReviews)

router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewById)
    .post((req, res) => res.status(501).json({ 'msg': 'Not implemented' }))
    .put(reviewController.updateReviewById)
    .delete(reviewController.deleteReviewById)

module.exports = router