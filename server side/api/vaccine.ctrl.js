import VaccineCenter from '../models/vaccineCenterSchema.js';
import User from '../models/userSchema.js';

// All vaccines related DAO's are hadndled here.
export default class vaccineDAO {
    static async getVaccineCenter(req, res) {
        try {
            const vaccineData = await VaccineCenter.find({}, (err, saved) => {
                if (err) {
                    return err;
                } else return saved;
            });
            res.json({ error: false, data: vaccineData });
        } catch (error) {
            res.json({ error: true, msg: error.message });
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
            const vaccineData = await VaccineCenter.find({ Vaccination_Center: req.body.centerName }, (err, saved) => {
                if (err) {
                    return err;
                } else return saved;
            });
            console.log(vaccineData);
            let newDoses = vaccineData[0].Doses_Remaining - 1;
            if (newDoses === 0) {
                let vaccine = await VaccineCenter.updateOne(
                    { id: vaccineData.id },
                    { Doses_Remaining: newDoses, availability: false },
                    (err, saved) => {
                        if (err) {
                            return err;
                        } else return saved;
                    },
                );
                console.log(vaccine);
            } else {
                let vaccine = await VaccineCenter.updateOne({ id: vaccineData[0].id }, { Doses_Remaining: newDoses }, (err, saved) => {
                    if (err) {
                        return err;
                    } else return saved;
                });
                console.log(vaccine);
            }
            res.json({ error: false, data: user }).status(200);
        } catch (error) {
            res.json({ error: true, msg: error.message });
        }
    }
}
