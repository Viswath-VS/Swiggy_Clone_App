import express from 'express';
import UsersDAO from './user.ctrl.js';
import vaccineDAO from './vaccine.ctrl.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// handling various api request from front-end

// Authentication routes.
router.route('/register').post(UsersDAO.addUser);
router.route('/login').post(UsersDAO.loginUser);

// protected Routes

router.route('/center').post(authMiddleware, vaccineDAO.getVaccineCenter);
router.route('/confirm').post(authMiddleware,vaccineDAO.verifySubmition);
router.route('/create').post(UsersDAO.createCenter);
// router.route('/data').get(authMiddleware, vaccineDAO.getVaccine);

export default router;
