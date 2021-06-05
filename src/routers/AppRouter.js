import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path='/login' component={LoginScreen}/> */}
                    <PublicRoute path='/login' component={LoginScreen} isAuthenticated={user.logged} />
                    {/* <Route path='/' component={DashboardRoutes}/> */}
                    <PrivateRoute path='/' component={DashboardRoutes} isAuthenticated={user.logged} />
                </Switch>
            </div>
        </Router>
    )
}
