const jwt = require('jsonwebtoken');
const config = require('config');

const authAdminAccess = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    if (decoded.user.type !== 'admin') {
      return res
        .status(401)
        .json({ msg: 'This route is restricted to admins' });
    }

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token, authorization denied' });
  }
};

module.exports = authAdminAccess;
