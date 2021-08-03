import {ACTION_CONST} from "./actionsConstants";
import {ExpenseActionsType} from "./actionTypes";
import {AppStateType} from "../index";
import { ThunkAction } from "redux-thunk";
import {ApiService} from "../../services/Api.service";
import {ExpenseItemType} from "../../types/ExpenseItemType";


export const getExpensesListAction = (): ExpenseActionsType => ({
    type: ACTION_CONST.GET_EXPENSES_LIST
})

export const getExpensesList = (): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        let data = await ApiService.getExpenseList()
        const expenseList = Object.keys(data).map(key => {
            return {
                ...data[key],
                id: key
            }
        })
        dispatch(setExpensesListAction(expenseList))
    }
}


export const setExpensesListAction = (list: Array<ExpenseItemType>): ExpenseActionsType => ({
    type: ACTION_CONST.SET_EXPENSES_LIST,
    payload: list
})

export const addExpenseItemAction = (item: ExpenseItemType): ExpenseActionsType => ({
    type: ACTION_CONST.ADD_EXPENSE_ITEM,
    payload: item
})

export const addExpenseItem = (title: string, value: number): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        const item = {
            title, value
        }
        const expenseItem = await ApiService.addExpenseItem(item)
        dispatch(addExpenseItemAction(expenseItem))
    }
}