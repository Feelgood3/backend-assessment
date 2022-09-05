const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { signToken } = require('./auth.service');

const {
  findUserByEmail,
  registerUser,
  findOneUser,
} = require('../../user/user.service');

const loginUserHandler = async (req, res, next) => {
  const { email, password } = req.body

  const user = await findUserByEmail(email)

  if (!user) {
    return res.status(404).json({ message: 'Wrong credentials' })
  }

  const userPassword = user.password;

  try {
    const matchPassword = await bcrypt.compare(password, userPassword);
    if (!matchPassword) {
      return res.status(404).json({ message: 'Wrong password' })
    }
    const token = signToken({ email: user.email });

    return res.status(200).json({ token, profile: user.profile });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' })
  }
}

const registerUserHandler = async (req, res) => {
  let userData = req.body;
  let { email, password } = req.body;
  const userFound = await findUserByEmail(email);

  if (userFound) {
    return res.status(404).json({ message: 'User is already registered' })
  }

  const salt = await bcrypt.genSalt()
  const hash = await bcrypt.hash(password, salt)

  userData.password = hash
}

module.exports = {
  registerUserHandler,
  loginUserHandler,
}
