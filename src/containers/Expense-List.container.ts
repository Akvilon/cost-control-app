import {connect} from "react-redux";
import {AppStateType} from "../store";
import {AnyAction} from "redux";
import {ExpenseList} from "../components/Expense List";
import {ExpenseItemType} from "../types/ExpenseItemType";
import {getExpenseListSelector, getExpensesList, patchExpenseItem} from "../store/expenses";
import { ThunkDispatch } from "redux-thunk";

type StatePropsTypes = {
    expenseList: Array<ExpenseItemType>,
}

type DispatchPropsTypes = {
    getExpensesList: () => void
    patchItem: (field: string, value: string | number, id: string | undefined) => void
}

const mapStateToProps = (state: AppStateType): StatePropsTypes => ({
    expenseList: getExpenseListSelector(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchPropsTypes => ({
    getExpensesList: () => dispatch(getExpensesList()),
    patchItem: (field: string, value: string | number, id: string | undefined) => dispatch(patchExpenseItem(field, value, id))
})

const ConnectedExpenseList = connect<StatePropsTypes, DispatchPropsTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ExpenseList)

export {ConnectedExpenseList as ExpenseList}