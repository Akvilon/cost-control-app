import {addExpenseItem, getExpenseListSelector} from "../store/expenses";
import {AppStateType} from "../store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect} from "react-redux";
import { Home } from "../components/Home";
import {ExpenseItemType} from "../types/ExpenseItemType";

type StatePropsTypes = {
    expenseList: Array<ExpenseItemType>
}

type DispatchPropsTypes = {
    addExpenseItem: (title: string, value: number) => void
}

const mapStateToProps = (state: AppStateType): StatePropsTypes => ({
    expenseList: getExpenseListSelector(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchPropsTypes => ({
    addExpenseItem: (title: string, value: number) => dispatch(addExpenseItem(title, value))
})

const ConnectedHome = connect<StatePropsTypes, DispatchPropsTypes, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Home)

export {ConnectedHome as Home}