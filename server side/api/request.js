import express from 'express';
import UsersDAO from './user.ctrl.js';
import vaccineDAO from './vaccine.ctrl.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// handling various api request from front-end
router.route('/register').post(UsersDAO.addUser);

router.route('/login').post(UsersDAO.loginUser);

router.route('/data').get(authMiddleware, vaccineDAO.getVaccine);
router.route('/center').post(authMiddleware, vaccineDAO.getVaccineCenter);
router.route('/confirm').post(vaccineDAO.verifySubmition);
// router.route('/create').post(UsersDAO.createCenter);
// router.route("/auth").post(authMiddleware,UsersDAO.authUser);

export default router;
