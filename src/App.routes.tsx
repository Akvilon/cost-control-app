import { RouteComponentProps } from 'react-router-dom';
import * as CONST from './constants';
import { HistoryPage, HomePage } from "./pages";

export type AppRoute = {
    path: CONST.PATHES,
    render: (props: RouteComponentProps) => JSX.Element,
    exact?: boolean,
    id: number
}


export const routes = [
    {
        path: CONST.PATHES.HOME,
        render: (props: RouteComponentProps) => <HomePage {...props}/>,
        exact: true,
        id: 1
    },
    {
        path: CONST.PATHES.HISTORY,
        render: (props: RouteComponentProps) => <HistoryPage {...props}/>,
        id: 2
    }
]