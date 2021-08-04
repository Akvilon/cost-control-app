import {ACTION_CONST} from "./actionsConstants";
import {ExpenseActionsType} from "./actionTypes";
import {AppStateType} from "../index";
import { ThunkAction } from "redux-thunk";
import {ApiService} from "../../services/Api.service";
import {ExpenseItemType} from "../../types/ExpenseItemType";

export const setExpensesListAction = (list: Array<ExpenseItemType>): ExpenseActionsType => ({
    type: ACTION_CONST.SET_EXPENSES_LIST,
    payload: list
})

export const addExpenseItemAction = (item: ExpenseItemType): ExpenseActionsType => ({
    type: ACTION_CONST.ADD_EXPENSE_ITEM,
    payload: item
})

export const patchExpenseItemAction = (field: string, value: string | number, id: string | undefined): ExpenseActionsType => ({
    type: ACTION_CONST.PATCH_EXPENSE_ITEM,
    payload: {field, value, id}
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

export const addExpenseItem = (title: string, value: number): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        const item = {
            title, value
        }
        const expenseItem = await ApiService.addExpenseItem(item)
        dispatch(addExpenseItemAction(expenseItem))
    }
}

export const patchExpenseItem = (field: string, value: string | number, id: string | undefined): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        const patchedItem = await ApiService.patchExpenseList(field, value, id)

        for (let key in patchedItem) {
            dispatch(patchExpenseItemAction(key, patchedItem[key], id))
        }
        //dispatch(patchExpenseItemAction( Object.keys(patchedItem),Object.values(patchedItem), id ))
    }
}