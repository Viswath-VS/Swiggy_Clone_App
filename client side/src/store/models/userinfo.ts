import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInfo, vaccineInfo } from 'typings/user';


const initialState:userInfo = {
    name: '',
    employeeID: '',
    isAuthenticated: false,
    token: '',
    isSlotBooked: false,
    date: '',
    centerName: '',
    timeSlot:'',
    vaccine: ''
}
const hydrateInitialState = (): userInfo => {
    const rawSavedAuthState = localStorage.getItem('user-info');
    const savedAuthState = JSON.parse(rawSavedAuthState);
    if (savedAuthState && Object.keys(savedAuthState).length === Object.keys(initialState).length) return savedAuthState;
    return initialState;
};

const requiredInitialState = hydrateInitialState();

const userSlice = createSlice({
   name: 'user',
   initialState: requiredInitialState,
   reducers:{
    updateAuthState: (state, { payload }: PayloadAction<userInfo>) => {
        Object.assign(state, payload);
        state.isAuthenticated = true;
        localStorage.setItem('user-info', JSON.stringify(state));
    },
    resetAuthState: (state) => {
        Object.assign(state, initialState);
        localStorage.clear();
    },
    updateVaccineInfo: (state,{payload}: PayloadAction<vaccineInfo> )=>{
        Object.assign(state, { ...state, ...payload });
        localStorage.setItem('user-info', JSON.stringify(state));
    }
   }

});

// exporting reducer and actions.
export default userSlice.reducer;
export const { updateAuthState, resetAuthState, updateVaccineInfo } = userSlice.actions;

