import User from '../models/userSchema.js';
import Vaccine from '../models/vaccineCenterSchema.js';
import bcrypt from 'bcrypt';
import { validateUser, validateAuth } from '../middleware/validation.js';

export default class UsersDAO {
    //   function to add new user to database
    static async addUser(req, res) {
        try {
            let { error } = await validateUser(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            let user = await User.findOne({ email: req.body.email });
            if (user) return res.status(400).send({ error: 'User already registered.' });
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

            const token = user.getToken();
            res.send({ token, user });
        } catch (error) {
            res.send(error.message);
        }
    }

    //   function to login existing user.
    static async loginUser(req, res) {
        try {
            const { error } = await validateAuth(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            let user = await User.findOne({ email: req.body.email });
            if (!user) return res.status(400).send('Invalid email');

            const validPassword = await bcrypt.compare(req.body.password, user.password);

            if (!validPassword) return res.status(400).send('Invalid Password.');
            const token = user.getToken();
            res.send({ token, user });
        } catch (error) {
            res.send(error.message);
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
