import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styles from './MessageBar.module.scss';
import { resetMessageBarState } from 'store/models/messageBar';
import { messageBar } from 'typings/user';
import cn from 'classnames';
import { useAppDispatch } from 'config/hooks';

const MessageBar = (props: messageBar): ReactElement => {
    const [isActive, setIsActive] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [actualMessage, setActualMessage] = useState<string | ReactElement>('');
    const dispatch = useAppDispatch();
    const { active, message, dismiss, dismissAfter } = props;

    useEffect(() => {
        if (active) {
            clearTimeout(timeoutRef.current);
            setIsActive(true);
            setActualMessage(message);
            dispatch(resetMessageBarState()); // making space available for subsequent message popups
            if (dismiss && dismissAfter) {
                timeoutRef.current = setTimeout(() => {
                    setIsActive(false);
                }, dismissAfter ?? 3000);
            }
        }
    }, [active]);

    return (
        <div className={cn(styles.messageBarWrapper, props?.messageBarType)}>
            {isActive && (
                <div className={styles.messageContainer}>
                    {/* <div className={styles.messageActionIconHolder}>{getActionIcon()}</div> */}
                    <div>{actualMessage}</div>
                </div>
            )}
        </div>
    );
};

export default MessageBar;
