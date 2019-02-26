let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//Initialize connection to Database
require('./server-assets/db/gearhost-config')

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))



//Routes
let drinkRoutes = require('./server-assets/routes/drink-routes')
let foodRoutes = require('./server-assets/routes/food-routes')


server.use('/api/drinks', drinkRoutes)
server.use('/api/foods', foodRoutes)


//CatchAll
server.use('*', (req, res, next) => {
    res.status(404).send('No matching routes')
})



//start server
server.listen(port, () => {
    console.log('Server Running on Port:', port, ' (You better go catch it)')
})