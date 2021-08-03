import {ACTION_CONST} from "./actionsConstants";
import {ExpenseItemType} from "../../types/ExpenseItemType";


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


export type ExpenseActionsType = GetExpensesListActionType | SetExpensesListActionType | AddExpenseItemType;