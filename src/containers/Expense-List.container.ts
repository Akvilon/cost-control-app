import {connect} from "react-redux";
import {AppStateType} from "../store";
import {AnyAction} from "redux";
import {ExpenseList} from "../components/Expense List";
import {ExpenseItemType} from "../types/ExpenseItemType";
import {getExpenseListSelector, getExpensesList} from "../store/expenses";
import { ThunkDispatch } from "redux-thunk";

type StatePropsTypes = {
    expenseList: Array<ExpenseItemType>,
}

type DispatchPropsTypes = {
    getExpensesList: () => void
}

const mapStateToProps = (state: AppStateType): StatePropsTypes => ({
    expenseList: getExpenseListSelector(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchPropsTypes => ({
    getExpensesList: () => dispatch(getExpensesList())
})

const ConnectedExpenseList = connect<StatePropsTypes, DispatchPropsTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(ExpenseList)

export {ConnectedExpenseList as ExpenseList}