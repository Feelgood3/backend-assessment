const services = require('./favs.service');

const {
  getAllFavs,
  getSingleFavs,
  createSingleFavs,
  deleteSingleFavs,
  getAllFavsLists,
  getSingleFavsList,
  getAllUserFavsLists,
  createFavsList,
  deleteFavsList,
  addFavsToFavsList,
  deleteFavsAtFavsList,
} = services;

const {
  addFavsListToUser,
  deleteFavsListInUser,
} = require('../user/user.service');

const getAllFavsHandler = async (req, res) => {
  const favs = await getAllFavs({});

  if (!favs) {
    res.status(404).json({ failed: 'No Favs were found' });
  }
  res.status(200).json({ found: favs });
};

const getSingleFavsHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const singleFavs = await getSingleFavs(id);

    if (singleFavs) {
      return res.status(200).json({ found: singleFavs });
    }
    return res.status(404).json({ error: 'Single Favs item not found' });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to find Favs' });
  }
};

const createFavsHandler = async (req, res) => {
  const { favsListId } = req.params;
  const owner = req.user;
  let FavsData = req.body;
  FavsData = { ...FavsData, owner, favsList: favsListId };

  try {
    const favs = await createSingleFavs(FavsData);
    await addFavsToFavsList(favsListId, favs.id);
    return res.status(201).json({ favs });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to create Favs' });
  }
};

const deleteFavsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const fav = await getSingleFavs(id);
    if (!fav) {
      return res.status(404).json({ message: 'Favs not found' });
    }
    await deleteFavsAtFavsList(id, fav.favsList);
    await deleteSingleFavs(id);
    console.log(`Favs with id: ${id} deleted`);
    return res.json({ message: 'Favs item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to delete Favs' });
  }
};

const getAllFavsListsHandler = async (_req, res) => {
  try {
    const favs = await getAllFavsLists();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to find all Favs lists' });
  }
};

const getSingleFavsListHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const favs = await getSingleFavsList(id);

    if (!favs) {
      return res.status(404).json({ message: 'Unable to find Favs list' });
    }
    return res.json(favs);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to obtain Favs list' });
  }
};

const getAllUserFavsListsHandler = async (req, res) => {
  const { id } = req.user;
  try {
    const userFavs = await getAllUserFavsLists(id);
    return res.status(200).json(userFavs);
  } catch (error) {
    return res.status(501).json({ error: 'Unable to obtain this user Favs lists' });
  }
};

const createFavsListHandler = async (req, res) => {
  const { id } = req.user;
  const deconstFavsListData = req.body;
  const favsListData = { ...deconstFavsListData, owner: id };

  try {
    const favList = await createFavsList(favsListData);

    await addFavsListToUser(id, favList.id);

    return res.status(201).json(favList);
  } catch (error) {
    return res.status(500).json({ error: 'Unable to create Favs list' });
  }
};

const deleteFavsListHandler = async (req, res) => {
  const { id } = req.params;
  const user = await req.user;
  try {
    let favs = await getSingleFavsList(id);

    await deleteFavsListInUser(user.id, favs.id);

    favs = await deleteFavsList(id);
    if (!favs) {
      return res.status(404).json({ message: 'Favs list was not found' });
    }

    return res.json({ message: 'Favs list successfully deleted' });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to delete Favs list' });
  }
};

module.exports = {
  getAllFavsHandler,
  getSingleFavsHandler,
  createFavsHandler,
  deleteFavsHandler,
  getAllFavsListsHandler,
  getSingleFavsListHandler,
  getAllUserFavsListsHandler,
  createFavsListHandler,
  deleteFavsListHandler,
};
