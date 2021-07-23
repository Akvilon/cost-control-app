import React from 'react';
import {Switch, Route} from "react-router-dom";
import {routes, AppRoute} from './App.routes';

export const App: React.FC = () => {
  return (
    <>
        <Switch>
            {
                routes.map((route: AppRoute) => <Route key={route.id} {...route}/>)
            }
        </Switch>
    </>
  );
}


