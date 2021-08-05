import {addExpenseItem} from "../store/expenses";
import {AppStateType} from "../store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect} from "react-redux";
import { Home } from "../components/Home";

type DispatchPropsTypes = {
    addExpenseItem: (title: string, value: number) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): DispatchPropsTypes => ({
    addExpenseItem: (title: string, value: number) => dispatch(addExpenseItem(title, value))
})

const ConnectedHome = connect<{}, DispatchPropsTypes, {}, AppStateType>(undefined, mapDispatchToProps)(Home)

export {ConnectedHome as Home}