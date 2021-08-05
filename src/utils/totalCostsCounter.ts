import moment from "moment";
import {ExpenseItemType} from "../types/ExpenseItemType";


export const totalCostsCounter = (list: Array<ExpenseItemType>): number => {
    const currentMonth = moment().format('MMM');
    return list.filter(item => item.date!.month === currentMonth).reduce((acc, item): number => acc + item.value!, 0)
}