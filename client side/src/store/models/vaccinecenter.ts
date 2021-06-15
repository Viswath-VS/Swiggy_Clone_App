import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { vaccineData } from 'typings/request';

const initialState: [vaccineData] = [
    {
        _id: 0,
        Vaccination_Center: '',
        Doses_Remaining: 0,
        location: '',
    },
];

const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState: initialState,
    reducers: {
        updateVaccine: (state, { payload }: PayloadAction<[vaccineData]>) => {
            Object.assign(state, payload);
            localStorage.setItem('vaccine-info', JSON.stringify(state));
        },
    },
});

// exporting reducer and actions.
export default vaccineSlice.reducer;
export const { updateVaccine } = vaccineSlice.actions;
