import { compose, combineReducers, createStore, applyMiddleware, Middleware } from "redux";
import expenses, {expensesMiddlewares, ExpensesStateType} from "./expenses";
import thunk from 'redux-thunk';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export interface AppStateType {
    expenses: ExpensesStateType,
}

const rootReducer = () => combineReducers(
    {
        expenses
    }
);

export default () => {
    return createStore(
        rootReducer(),
        undefined,
        composeEnhancers(
            applyMiddleware(
                thunk,
                ...expensesMiddlewares as Middleware[]
            )
        )
    );
}