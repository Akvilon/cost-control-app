import {ACTION_CONST} from "./actionsConstants";
import {ExpenseActionsType} from "./actionTypes";
import {ExpenseItemType} from "../../types/ExpenseItemType";

const INITIAL_STATE = {
   expenseList: [] as Array<ExpenseItemType>
}

export type ExpensesStateType = typeof INITIAL_STATE;

export default (state = INITIAL_STATE, action: ExpenseActionsType): ExpensesStateType => {
   switch (action.type) {
      case ACTION_CONST.SET_EXPENSES_LIST:
         return { ...state, expenseList: action.payload }
      case ACTION_CONST.ADD_EXPENSE_ITEM:
         return { ...state, expenseList: [...state.expenseList, action.payload]}
      case ACTION_CONST.PATCH_EXPENSE_ITEM:
         return {...state, expenseList: state.expenseList.map(item => {
            return item.id === action.payload.id ? { ...item, [action.payload.field]: action.payload.value} : item
            })}
      default:
         return state
   }
}