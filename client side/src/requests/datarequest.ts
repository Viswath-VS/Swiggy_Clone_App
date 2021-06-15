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
            date, timeSlot, vaccine
        }

        axiosConfig
            .post('/center', data,{ headers: headers })
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

export const confirmSubmition = async ({...props}:userInfo): Promise<IResponse & { data?: userInfo }> => {
    return new Promise((resolve) => {
        let state = localStorage['user-info'];
        let AppState;
        if (state) {
            AppState = JSON.parse(state);
        }
        let token = AppState && AppState.token;
        const headers = { Authorization: `Bearer ${token}` };
        const data = {props}

        axiosConfig
            .post('/confirm', data,{ headers: headers })
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


