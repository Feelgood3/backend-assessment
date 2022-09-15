const {
  getSingleUser,
  findUserByEmail,
} = require('./user.service');

export async function getSingleUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'User was not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export async function findUserByEmailHandler(req, res) {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User was not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'There was an error' });
  }
}
