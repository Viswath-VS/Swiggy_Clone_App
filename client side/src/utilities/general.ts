import { store } from 'store/store';
import { showMessage as showMessageAction } from 'store/models/messageBar';


export const showMessage = (
    messageString: string,
    type: string,
    dismissAfter = 4000, // pass 0 when non dismissable message required.
): void => {
    store.dispatch(showMessageAction({ messageString, type, dismissAfter }));
};