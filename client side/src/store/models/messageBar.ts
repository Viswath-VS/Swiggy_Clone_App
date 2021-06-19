import { createSlice, PayloadAction, Selector } from '@reduxjs/toolkit';
import { messageBar } from 'typings/user';


const initialState: messageBar = {
    active: false,
    message: '',
    dismiss: false,
    dismissAfter: 3000,
    messageBarType: 'info',
};

const messageBarSlice = createSlice({
    name: 'messageBar',
    initialState,
    reducers: {
        showMessage: (
            state,
            {
                payload,
            }: PayloadAction<{
                messageString: string;
                type?: string;
                dismissAfter?: number; // pass 0 when non dismissable message required.
            }>,
        ) => {
            const mergeMessage = {
                ...state,
                active: payload.messageString ? true : false,
                message: payload.messageString ?? '',
                messageBarType: payload.type,
                dismiss: (payload.dismissAfter ?? 3000) > 0,
                dismissAfter: payload.dismissAfter ?? 3000,
            } as messageBar;

            Object.assign(state, mergeMessage);
        },
        resetMessageBarState: (state) => {
            Object.assign(state, initialState);
        },
    },
});

// exporting reducer
export default messageBarSlice.reducer;

// exporting actions
export const { showMessage, resetMessageBarState } = messageBarSlice.actions;
