const jwt = require('jsonwebtoken')
const AdminMiddleware = (req, res, next) => {
  const tokenHead = req.header('Authorization')
  const decoded = jwt.verify(tokenHead, 'secretkey')
  const userRole = decoded.role
  console.log(userRole)
  if (userRole !== 'admin') {
    return res.status(403).json({ error: 'Access forbidden.' })
  }
  next()
}

module.exports = AdminMiddleware
