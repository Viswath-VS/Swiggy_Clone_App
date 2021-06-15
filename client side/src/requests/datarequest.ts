import { userInfo } from './../typings/user';
import axiosConfig from 'config/axiosconfig';
import { dataResponse, IResponse, vaccineData } from 'typings/request';
export const vaccineDatas = async (): Promise<IResponse & { data?: [dataResponse] }> => {
    return new Promise((resolve) => {
        let state = localStorage['user-info'];
        let AppState;
        if (state) {
            AppState = JSON.parse(state);
        }
        let token = AppState && AppState.token;
        const headers = { Authorization: `Bearer ${token}` };
        axiosConfig
            .get('/data', { headers: headers })
            .then((res) => {
                return resolve({
                    status: true,
                    data: res.data,
                });
            })
            .catch((error) => {
                resolve({ status: false, error: error.message });
            });
    });
};

export const vaccineCenterData = async (date: string, timeSlot: string, vaccine: string): Promise<IResponse & { data?: [vaccineData] }> => {
    return new Promise((resolve) => {
        let state = localStorage['user-info'];
        let AppState;
        if (state) {
            AppState = JSON.parse(state);
        }
        let token = AppState && AppState.token;
        const headers = { Authorization: `Bearer ${token}` };
        const data = {
            date,
            timeSlot,
            vaccine,
        };

        axiosConfig
            .post('/center', data, { headers: headers })
            .then((res) => {
                return resolve({
                    status: true,
                    data: res.data,
                });
            })
            .catch((error) => {
                resolve({ status: false, error: error.message });
            });
    });
};

export const confirmSubmition = async (): Promise<IResponse & { data?: userInfo }> => {
    return new Promise((resolve) => {
        let state = localStorage['user-info'];
        let AppState;
        if (state) {
            AppState = JSON.parse(state);
        }
        let token = AppState && AppState.token;
        const headers = { Authorization: `Bearer ${token}` };
        const data = {
            email_id: AppState.email_id,
            date: AppState.date,
            centerName: AppState.centerName,
            timeSlot: AppState.timeSlot,
            vaccine: AppState.vaccine,
        };

        axiosConfig
            .post('/confirm', data, { headers: headers })
            .then((res) => {
                console.log('response', res.data);

                return resolve({
                    status: true,
                    data: {
                        name: res.data.name,
                        employeeID: res.data.employee_id,
                        email_id: res.data.email,
                        isSlotBooked: res.data.slot_booked,
                        centerName: res.data.vaccine_center,
                        date: res.data.date,
                        timeSlot: res.data.time_slot,
                        token: token,
                        vaccine: res.data.vaccine_name,
                    },
                });
            })
            .catch((error) => {
                resolve({ status: false, error: error.message });
            });
    });
};
