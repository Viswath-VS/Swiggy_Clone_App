import Joi from 'joi';

// validate function to check user signin credentials.
const validateUser = (user) => {
    try {
        const schema = Joi.object({
            name: Joi.string().min(5).max(20).required(),
            email: Joi.string().min(12).max(255).required().email(),
            password: Joi.string().min(5).max(255).required(),
            employee_id: Joi.string().min(5).max(255).required(),
            slot_booked: Joi.boolean(),
            vaccine_center: Joi.string().allow('').optional(),
            date: Joi.string().allow('').optional(),
            time_slot: Joi.string().allow('').optional(),
            vaccine_name: Joi.string().allow(''),
        });
        return schema.validate(user);
    } catch (error) {
        console.log(error);
    }
};

// validate function to check user login credentials.
const validateAuth = (auth) => {
    const schema = Joi.object({
        email: Joi.string().min(12).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(auth);
};

export { validateAuth, validateUser };
