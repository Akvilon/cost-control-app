import {AppStateType} from "../index";


export const getExpenseListSelector = (state: AppStateType) => state.expenses.expenseList
export const getTotalCostsSelector = (state: AppStateType) => state.expenses.totalCosts