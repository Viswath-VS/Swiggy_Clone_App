import axiosConfig from 'config/axiosconfig';

interface registerUser {
    userName ?: string;
    password: string;
    email: string;
    employeeID ?: string;
}

export const registerUser = ({ userName, password, email, employeeID }: registerUser) => {
    return new Promise((resolve) => {
        const formData = new FormData();
        formData.append('username', userName);
        formData.append('employee_id', employeeID);
        formData.append('email', email);
        formData.append('password', password);
        axiosConfig.post('/register', formData).then((res) => {
            resolve({ status: true, data: { username: userName, employeeid: employeeID, token: res.data.token } })
        }).catch((error)=>{
            resolve({status:false, error:error.message})
        });
    });
};

export const loginUser = ({email, password}:registerUser) =>{
    return new Promise((resolve)=>{
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        axiosConfig.post('/login', formData).then((res) => {
            resolve({ status: true, data: { username: res.data.username, employeeid: res.data.employee_id, token: res.data.token } })
        }).catch((error)=>{
            resolve({status:false, error:error.message})
        });
    })
}