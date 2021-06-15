import express from 'express';
import UsersDAO from './user.ctrl.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// handling various api request from front-end
router.route('/register').post(UsersDAO.addUser);

router.route('/login').post(UsersDAO.loginUser);

router.route('/data').get(authMiddleware, UsersDAO.getVaccine);
router.route('/center').post(authMiddleware, UsersDAO.getVaccineCenter);
router.route('/confirm').post( UsersDAO.verifySubmition);
// router.route('/create').post(UsersDAO.createCenter);
// router.route("/auth").post(authMiddleware,UsersDAO.authUser);

export default router;
