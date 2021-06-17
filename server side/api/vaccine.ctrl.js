import Vaccine from '../models/vaccineCenterSchema.js';
import User from '../models/userSchema.js';

// All vaccines related DAO's
export default class vaccineDAO {
    static async getVaccine(req, res) {
        try {
            const vaccineData = await Vaccine.find({}, (err, saved) => {
                if (err) {
                    return err;
                } else return saved;
            });
            res.send(vaccineData);
        } catch (error) {
            res.send(error.message);
        }
    }
    static async getVaccineCenter(req, res) {
        try {
            const vaccineData = [
                {
                    _id: 1,
                    Vaccination_Center: 'VS8 hospital',
                    Doses_Remaining: 12,
                    location: 'central bus stand,trichy.',
                },
                {
                    _id: 2,
                    Vaccination_Center: 'xyz healthcenter',
                    Doses_Remaining: 8,
                    location: 'thillai nagar, trichy.',
                },
            ];
            res.send(vaccineData);
        } catch (error) {
            res.send(error.message);
        }
    }

    static async verifySubmition(req, res) {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.body.email_id },
                {
                    slot_booked: true,
                    vaccine_center: req.body.centerName,
                    date: req.body.date,
                    time_slot: req.body.timeSlot,
                    vaccine_name: req.body.vaccine,
                },
                { new: true },
                (error, saved) => {
                    if (error) return error;
                    else return saved;
                },
            );

            res.json(user).status(200);
        } catch (error) {
            res.send(error.message);
        }
    }
}
