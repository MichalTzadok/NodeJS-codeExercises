const AuthorizationMiddleware = (req, res, next) => {
  const tokenHead = req.header('Authorization')
  if (!tokenHead) { res.status(401).send({ error: 'Authorization failed.' }) }
  next()
}

module.exports = AuthorizationMiddleware
