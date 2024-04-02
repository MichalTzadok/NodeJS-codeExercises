// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Could not connect to MongoDB', err));

const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./routers/usersRouter');
const categoriesRouter = require('./routers/routerCategories');
// const checkRequestBodyMiddleware=require('./middlewares/CheckRequestBodyMiddleware');
// const logMiddleware=require('./middlewares/LogMIddleware');
// const authorizationMiddleware=require('./middlewares/authorizationMiddleware');


const port = 3015;
// app.use(checkRequestBodyMiddleware, (err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('יש כרגע שגיאה בשרת נסה שוב מאוחר יותר');
// });
// app.use(logMiddleware, (err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('יש כרגע שגיאה בשרת נסה שוב מאוחר יותר');
// });
app.use(userRoutes, (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('יש כרגע שגיאה בשרת נסה שוב מאוחר יותר');
});
// app.use(authorizationMiddleware, (err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).send('יש כרגע שגיאה בשרת נסה שוב מאוחר יותר');
// });

app.use(categoriesRouter, (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('יש כרגע שגיאה בשרת נסה שוב מאוחר יותר');
});

app.get("*", function (req, res) {
  res.status(404).send("!יש לך טעות בכתובת");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
