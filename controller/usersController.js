require('dotenv').config()

const jwt = require('jsonwebtoken')
const User = require('../classes/userClass')

const userBl = require('../bl/usersBl')
const generateAuthToken = async (user) => {
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET)
  return token
}

exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = userBl.getUsersByNameAndPassword(username, password)
    if (user === undefined) throw new Error('User not found.')
    const token = await generateAuthToken(user)
    res.send({ token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

exports.signup = async (req, res) => {
  const { username, password, role } = req.body
  try {
    const newUser = new User(username, password, role)
    newUser.save()
    const token = await generateAuthToken(newUser)
    res.status(201).send({ newUser, token })
  } catch (error) {
    res.status(400).send({ error: 'Error creating user.' })
  }
}
