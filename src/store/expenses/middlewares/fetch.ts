import {Middleware, MiddlewareAPI} from "redux";
import {Action} from "../../types";
import {ACTION_CONST} from "../actionsConstants";

const fetchMiddleware: Middleware = ({ getState, dispatch }: MiddlewareAPI) => (next: (action: Action<string>) => void) => async (action: Action<string>) => {
    if (action.type === ACTION_CONST.GET_EXPENSES_LIST) {

    }

    next(action);
}

export const fetchMiddlewares = [fetchMiddleware];