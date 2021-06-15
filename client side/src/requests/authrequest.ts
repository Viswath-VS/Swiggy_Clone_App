import axiosConfig from 'config/axiosconfig';
import { IResponse, loginUser, registerUser } from 'typings/request';
import { userInfo } from 'typings/user';
import { store } from 'store/store';
import { resetAuthState } from 'store/models/userinfo';

export const registerUsers = ({ name, employee_id, email, password }: registerUser): Promise<IResponse & { data?: userInfo }> => {
    return new Promise((resolve) => {
        const data = {
            name,
            employee_id,
            email,
            password,
        };
        axiosConfig
            .post('/register', data)
            .then((res) => {
                resolve({
                    status: true,
                    data: {
                        name: res.data.user.name,
                        employeeID: res.data.user.employee_id,
                        centerName: res.data.user.vaccine_center,
                        date: res.data.user.date,
                        email_id:res.data.email,
                        token: res.data.token,
                        isSlotBooked: res.data.user.slot_booked,
                        timeSlot: res.data.user.time_slot,
                        vaccine: res.data.user.vaccine_name,
                    },
                });
            })
            .catch((error) => {
                resolve({ status: false, error: error.message });
            });
    });
};

export const loginUsers = ({ email, password }: loginUser): Promise<IResponse & { data?: userInfo }> => {
    return new Promise((resolve) => {
        const data = {
            email,
            password,
        };
        axiosConfig
            .post('/login', data)
            .then((res) => {
                resolve({
                    status: true,
                    data: {
                        name: res.data.user.name,
                        employeeID: res.data.user.employee_id,
                        centerName: res.data.user.vaccine_center,
                        date: res.data.user.date,
                        email_id:res.data.user.email,
                        token: res.data.token,
                        isSlotBooked: res.data.user.slot_booked,
                        timeSlot: res.data.user.time_slot,
                        vaccine: res.data.user.vaccine_name,
                    },
                });
            })
            .catch((error) => {
                resolve({ status: false, error: error.message });
            });
    });
};

export const unAuthenticateUser = async (): Promise<void> => {
    store.dispatch(resetAuthState());
};
