const checkRequestBodyMiddleware = (req, res, next) => {
  if ((req.method === "PUT" || req.method === "POST") && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Missing request body' });
  }
  next();
};
module.exports = checkRequestBodyMiddleware;