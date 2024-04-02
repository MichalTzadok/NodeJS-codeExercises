const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const userRoutes = require('./routers/usersRouter')
const categoriesRouter = require('./routers/routerCategories')
const checkRequestBodyMiddleware = require('./middlewares/CheckRequestBodyMiddleware')
const logMiddleware = require('./middlewares/LogMIddleware')
const authorizationMiddleware = require('./middlewares/authorizationMiddleware')

const port = process.env.PORT || 3015
app.use(checkRequestBodyMiddleware)
app.use(logMiddleware)
app.use(userRoutes)
app.use(authorizationMiddleware)
app.use(categoriesRouter)

app.get('*', function (req, res) {
  res.status(404).send('!יש לך טעות בכתובת')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
