import React, { ReactElement, useState, useEffect } from 'react';
import styles from './App.module.scss';
import { ROUTES } from 'config/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from 'layouts/dashboard/dashboard';
import Auth from 'layouts/auth/auth';
import MessageBar from 'components/messageBar/messageBar';
import { useAppDispatch, useAppSelector } from 'config/hooks';

const App = (): ReactElement => {
    const authState = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <div className={styles.appWrapper}>
            <div className={styles.appCoreWrapper}>
                <div className={styles.appContainer}>
                    <Switch>
                        <Route path={[ROUTES.AUTH]}>{!authState ? <Auth /> : <Redirect to={ROUTES.DASHBOARD} />}</Route>
                        <Route>{authState ? <DashBoard /> : <Redirect to={ROUTES.AUTH} />}</Route>
                    </Switch>
                </div>
                {/* <MessageBar/> */}
            </div>
        </div>
    );
};

export default App;
