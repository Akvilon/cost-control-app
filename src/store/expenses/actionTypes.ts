import {ACTION_CONST} from "./actionsConstants";
import {ExpenseItemType} from "../../types/ExpenseItemType";
import {ExpenseItemPatchType} from "../../types/ExpenseItemPatchType";


export type GetExpensesListActionType = {
    type: typeof ACTION_CONST.GET_EXPENSES_LIST
}

export type SetExpensesListActionType = {
    type: typeof ACTION_CONST.SET_EXPENSES_LIST,
    payload: Array<ExpenseItemType>
}

export type AddExpenseItemType = {
    type: typeof ACTION_CONST.ADD_EXPENSE_ITEM,
    payload: ExpenseItemType
}

export type PatchExpenseItemType = {
    type: typeof ACTION_CONST.PATCH_EXPENSE_ITEM,
    payload: ExpenseItemPatchType
}

export type DeleteExpenseItemType = {
    type: typeof ACTION_CONST.DELETE_EXPENSE_ITEM,
    payload: string | undefined
}

export type SetTotalCostsActionType = {
    type: typeof ACTION_CONST.SET_TOTAL_COSTS,
    payload: number
}


export type ExpenseActionsType =
    GetExpensesListActionType |
    SetExpensesListActionType |
    AddExpenseItemType |
    PatchExpenseItemType |
    DeleteExpenseItemType |
    SetTotalCostsActionType;