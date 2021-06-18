import User from '../models/userSchema.js';
import Vaccine from '../models/vaccineCenterSchema.js';
import bcrypt from 'bcrypt';
import { validateUser, validateAuth } from '../middleware/validation.js';

export default class UsersDAO {
    //   function to add new user to database
    static async addUser(req, res) {
        try {
            let { error } = await validateUser(req.body);
            if (error) return res.status(200).json({ msg: error.details[0].message, error: true });

            let user = await User.findOne({ email: req.body.email });
            if (user) return res.status(200).json({ msg: 'You have already registered your account.', error: true });
            user = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                employee_id: req.body.employee_id,
                slot_booked: false,
                vaccine_center: '',
                date: '',
                time_slot: '',
                vaccine_name: '',
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await user.save();
            delete user._doc.password;
            const token = user.getToken();
            res.json({ token, user, error: false });
        } catch (error) {
            res.json({ error: true, msg: error.message });
        }
    }

    //   function to login existing user.
    static async loginUser(req, res) {
        try {
            // no validation required for login flow.

            // const { error } = await validateAuth(req.body);
            // if (error) return res.status(200).json({ msg: error.details[0].message, error: true });
            let user = await User.findOne({ email: req.body.email });
            if (!user) return res.status(200).json({ msg: 'Incorrect email ID.', error: true });

            const validPassword = await bcrypt.compare(req.body.password, user.password);

            if (!validPassword) return res.status(200).json({ msg: 'Incorrect Password.', error: true });
            const token = user.getToken();
            delete user._doc.password;
            res.json({ token, user, error: false });
        } catch (error) {
            res.json({ error: true, msg: error.message });
        }
    }
    static async createCenter(req, res) {
        try {
            // let user = await Vaccine.findOne({ vaccine_center: req.body.vaccine_center });
            // if (user) return res.status(400).send('User already registered.');
            let vaccine = new Vaccine({
                vaccine_center: req.body.vaccine_center,
                location: req.body.location,
                dates: req.body.dates,
            });
            await vaccine.save();
            res.send({ msg: 'successfully added in database' });
        } catch (error) {
            res.send(error.message);
        }
    }
}
