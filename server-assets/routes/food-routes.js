const router = require('express').Router()
let Food = require('../models/Food')


//Logger for coffee routes
router.use('*', (req, res, next) => {
    console.log('A NEW CUSTOMER IN DRINK ROUTES!!!!')
    next()
})


//Get All
router.get('', (req, res, next) => {
    Food.find({})
        .then(foods => {
            res.status(200).send(foods)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})

//GetSugarfree
router.get('/sugarfree', (req, res, next) => {
    Food.find({ sugarFree: true })
        .then(foods => {
            res.status(200).send(foods)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Get by Id
router.get('/:id', (req, res, next) => {
    Food.findById(req.params.id)
        .then(food => {
            if (food) {
                return res.status(200).send(food)
            }
            res.status(400).send('No Food at that Id')
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Create
router.post('', (req, res, next) => {
    Food.create(req.body)
        .then(food => {
            res.status(201).send(food)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})

//Update
router.put('/:id', (req, res, next) => {
    Food.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(food => {
            res.status(200).send(food)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Delete
router.delete('/:id', (req, res, next) => {
    Food.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            res.status(200).send('Successfully deleted')
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})









module.exports = router