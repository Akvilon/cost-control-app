import {getTotalCostsSelector} from "../store/expenses";
import {connect} from "react-redux";
import {AppStateType} from "../store";
import {TotalCosts} from "../components/Total Costs";


type StatePropsTypes = {
    totalCosts: number
}

const mapStateToProps = (state: AppStateType): StatePropsTypes => ({
   totalCosts: getTotalCostsSelector(state)
})

const ConnectedTotalCosts = connect<StatePropsTypes, {}, {}, AppStateType>(mapStateToProps, {})(TotalCosts)

export {ConnectedTotalCosts as TotalCosts}