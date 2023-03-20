const jwt = require('jsonwebtoken');
const config = require('config');

const authUserAccess = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    if (decoded.user.type !== 'user') {
      return res
        .status(401)
        .json({ msg: 'This route is restricted only to users' });
    }

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token, authorization denied' });
  }
};

module.exports = authUserAccess;
