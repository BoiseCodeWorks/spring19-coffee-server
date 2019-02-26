const router = require('express').Router()
let Drink = require('../models/Drink')


//Logger for coffee routes
router.use('*', (req, res, next) => {
    console.log('A NEW CUSTOMER IN DRINK ROUTES!!!!')
    next()
})


//Get All
router.get('', (req, res, next) => {
    Drink.find({})
        .then(drinks => {
            res.status(200).send(drinks)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})

//GetSugarfree
router.get('/sugarfree', (req, res, next) => {
    Drink.find({ sugarFree: true })
        .then(drinks => {
            res.status(200).send(drinks)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Get by Id
router.get('/:id', (req, res, next) => {
    Drink.findById(req.params.id)
        .then(drink => {
            if (drink) {
                return res.status(200).send(drink)
            }
            res.status(400).send('No Drink at that Id')
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Create
router.post('', (req, res, next) => {
    Drink.create(req.body)
        .then(drink => {
            res.status(201).send(drink)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})

//Update
router.put('/:id', (req, res, next) => {
    Drink.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(drink => {
            res.status(200).send(drink)
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})


//Delete
router.delete('/:id', (req, res, next) => {
    Drink.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            res.status(200).send('Successfully deleted')
        })
        .catch(err => {
            res.status(500).send({ Error: err })
        })
})









module.exports = router