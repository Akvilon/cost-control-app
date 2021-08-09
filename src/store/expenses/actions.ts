import {ACTION_CONST} from "./actionsConstants";
import {ExpenseActionsType} from "./actionTypes";
import {AppStateType} from "../index";
import { ThunkAction } from "redux-thunk";
import {ApiService} from "../../services/Api.service";
import {ExpenseItemType} from "../../types/ExpenseItemType";
import {totalCostsCounter} from "../../utils/totalCostsCounter";

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

export const deleteExpenseItemAction = (id: string | undefined): ExpenseActionsType => ({
    type: ACTION_CONST.DELETE_EXPENSE_ITEM,
    payload: id
})

export const setTotalCostAction = (total: number): ExpenseActionsType => ({
    type: ACTION_CONST.SET_TOTAL_COSTS,
    payload: total
})

export const getExpensesList = (): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        let data = await ApiService.getExpenseList()
        if(!data) return
        const expenseList = Object.keys(data).map(key => {
            return {
                ...data[key],
                id: key
            }
        })
        const total = totalCostsCounter(expenseList) // Counting total costs
        dispatch(setExpensesListAction(expenseList))
        dispatch(setTotalCostAction(total))
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

        const expenseList = getState().expenses.expenseList;
        const total = getState().expenses.totalCosts;

        const itemCurrentCostValue: number | null = expenseList.filter(item => item.id === id)[0].value

        // if patch field is cost value we should add its value to current state value
        let patchValue;
        if(field !== 'title') {
            patchValue = itemCurrentCostValue! + +value;
            const newTotal: number = total + +value;
            dispatch(setTotalCostAction(newTotal))
        } else {
            patchValue = value
        }

        const patchedItem = await ApiService.patchExpenseList(field, patchValue, id)

        for (let key in patchedItem) {
            dispatch(patchExpenseItemAction(key, patchedItem[key], id))
        }

    }
}

export const deleteExpenseItem = (id: string | undefined): ThunkAction<Promise<void>, AppStateType, unknown, ExpenseActionsType> => {
    return async (dispatch, getState) => {
        const res = await ApiService.deleteExpenseItem(id)
        dispatch(deleteExpenseItemAction(id))
        const expenseList = getState().expenses.expenseList;
        const total = totalCostsCounter(expenseList)
        dispatch(setTotalCostAction(total))
    }
}