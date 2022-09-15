const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { signToken } = require('./auth.service');

const {
  findUserByEmail, registerUser,
} = require('../../api/user/user.service');

const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ message: 'One or more fields are missing' });
  }

  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'Wrong credentials' });
  }

  const userPassword = user.password;

  try {
    const matchPassword = await bcrypt.compare(password, userPassword);
    if (!matchPassword) {
      return res.status(404).json({ message: 'Wrong password' });
    }
    const token = signToken({ email: user.email });

    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

const registerUserHandler = async (req, res) => {
  const userData = req.body;
  const { email } = req.body;
  const userFound = await findUserByEmail(email);

  if (userFound) {
    return res.status(404).json({ message: 'User is already registered' });
  }

  try {
    const hash = crypto.createHash('sha256').update(userData.email).digest('hex');

    userData.passwordResetActivationToken = hash;
    userData.passwordResetActivationExpires = Date.now() + 3_600_000 * 24;

    const user = await registerUser(userData);
    return res.status(201).json({ profile: user.profile, message: 'User registered' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  registerUserHandler,
  loginUserHandler,
};
