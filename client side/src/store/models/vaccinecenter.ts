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
        resetVaccine: (state) => {
            state.splice(0, state.length, ...initialState);
            localStorage.clear();
        },
    },
});

// exporting reducer and actions.
export default vaccineSlice.reducer;
export const { updateVaccine, resetVaccine } = vaccineSlice.actions;
