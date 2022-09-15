const services = require('./favs.service');

/**
 * @openapi
 *  /api/favsLists:
 *    get:
 *      tags:
 *      - FavsLists
 *      description: Get all favsLists
 *      responses:
 *        200:
 *          description: An array of all favLists in the DB
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1favsLists'
 *        500:
 *          description: Server Error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1serverError'
 */

/**
 * @openapi
 *  /api/favLists/{id}:
 *    get:
 *      tags:
 *      - FavsLists
 *      security:
 *      - bearerAuth: String
 *      description: get a single favsList
 *      parameters:
 *      - name: id
 *        description: Id of the searched favsList
 *      responses:
 *        200:
 *          description: Shows the searched favsList
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1favsList'
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1unauthorized'
 *        500:
 *          description: Server Error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1serverError'
 */

/**
 * @openapi
 *  /api/favsLists/{id}:
 *    get:
 *      tags:
 *      - FavsLists
 *      security:
 *      - bearerAuth: String
 *      description: get a single favsList
 *      parameters:
 *      - name: id
 *        description: Id of the searched favsList
 *      responses:
 *        200:
 *          description: Shows the searched favsList
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1favsList'
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1unauthorized'
 *        500:
 *          description: Server Error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas~1serverError'
 */

/**
  * @openapi
  *  /api/favLists/user:
  *    get:
  *      tags:
  *      - FavLists
  *      security:
  *      - bearerAuth: String
  *      description: Gets all user's favLists
  *      responses:
  *        200:
  *          description: An array of all user's favLists
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1favsLists'
  *        401:
  *          description: Unauthorized
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1unauthorized'
  *        500:
  *          description: Server Error
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1serverError'
  */

/**
  * @openapi
  *  /api/favLists:
  *    post:
  *      tags:
  *      - FavLists
  *      security:
  *      - bearerAuth: String
  *      description: Creates a new favList
  *      requestBody:
  *        required: true
  *        description: Name of the list
  *      content:
  *       application/json:
  *          schema:
  *              $ref: '#/components/schemas~1request'
  *      responses:
  *        200:
  *          description: A new favList has been created
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1favsList'
  *        401:
  *          description: Unauthorized
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1unauthorized'
  *        500:
  *          description: Server Error
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas~1serverError'
  */

/**
  * @openapi
  *  /api/favLists/{id}:
  *    patch:
  *      tags:
  *      - FavLists
  *      security:
  *      - bearerAuth: String
  *      description: Updates a selected favList
  *      parameters:
  *      - name: id
  *        description: FavList id to be updated
  *      responses:
  *        200:
  *          description: The selected favList has been updated
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/favList'
  *        401:
  *          description: Unauthorized
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/unauthorized'
  *        500:
  *          description: Server Error
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/serverError'
  */

/**
  * @openapi
  *  /api/favLists/{id}:
  *    delete:
  *      tags:
  *      - FavLists
  *      security:
  *      - bearerAuth: String
  *      description: Delete a single favList
  *      parameters:
  *      - name: id
  *        description: FavList id to delete
  *      responses:
  *        200:
  *          description: The selected favList has been deleted
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/deleted'
  *        401:
  *          description: Unauthorized
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/unauthorized'
  *        500:
  *          description: Server Error
  *          content:
  *            application/json:
  *              schema:
  *                $ref: '#/components/schemas/serverError'
  */

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
  res.status(200).json(favs);
};

const getSingleFavsHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const singleFavs = await getSingleFavs(id);

    if (singleFavs) {
      return res.status(200).json(singleFavs);
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
    return res.status(201).json(favs);
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
    // eslint-disable-next-line no-console
    console.log(`Favs with id: ${id} deleted`);
    return res.status(200).json({ message: 'Favs item deleted successfully' });
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
    return res.status(200).json(favs);
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

    return res.status(200).json({ message: 'Favs list successfully deleted' });
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
