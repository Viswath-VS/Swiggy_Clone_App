import React, { ReactElement, useState } from 'react';
import styles from './App.module.scss';
import { ROUTES } from 'config/routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import DashBoard from 'layouts/dashboard/dashboard';
import Auth from 'layouts/auth/auth';
const App = (): ReactElement => {
    const authState = {
        isAuthenticated: false,
    };
    return (
        <div className={styles.appWrapper}>
            <div className={styles.appCoreWrapper}>
                <div className={styles.appContainer}>
                    <Switch>
                        <Route path={[ROUTES.AUTH]}>{!authState.isAuthenticated ? <Auth /> : <Redirect to={ROUTES.DASHBOARD} />}</Route>
                        <Route>{authState.isAuthenticated ? <DashBoard /> : <Redirect to={ROUTES.AUTH} />}</Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;
