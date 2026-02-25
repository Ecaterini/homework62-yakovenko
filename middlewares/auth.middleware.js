function basicAuth(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).send('No authorization header');
  }

  next();
}

module.exports = basicAuth;