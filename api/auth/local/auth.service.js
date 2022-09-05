const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../../user/user.service');

const signToken = (payload) => {
  const token = jwt.sign(
    payload,
    'SUP3RL04DF4VS',
    { expiresIn: '1h' },
  );
  return token;
}

const verifyToken = async (token) => {
  try {
    const payload = await jwt.verify(token, 'SUP3RL04DF4VS');
    return payload;
  } catch (error) {
    return null;
  }
}

async function isAuthenticated(req, res, next) {
  const authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token was not found'});
  }

  const token = authHeader.split(' ')[1];

  // Now we are going to validate the token
  const decoded = await verifyToken(token);

  if (!decoded) {
   return res.status(401).json({ message: 'Unauthorized' });
  }

  // This adds a user to request
  const { email } = decoded;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'User not found'});
  }

  req.user = user;
  req.json({success: 'Authorized token'})

  next();
  return true;
}

module.exports = {
  isAuthenticated,
  signToken,
  verifyToken,
};
