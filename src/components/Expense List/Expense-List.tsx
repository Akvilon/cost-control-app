import React, {useEffect} from "react";
import {ExpenseItemType} from "../../types/ExpenseItemType";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from './Expense-List.styles';
import {ExpenseItem} from "../ExpenseItem";

type ExpenseListType = {
    expenseList: Array<ExpenseItemType>
    getExpensesList: () => void
    patchItem: (field: string, value: string | number, id: string | undefined) => void
    deleteItem: (id: string | undefined) => void
}

const ExpenseList: React.FC<ExpenseListType> = ({expenseList, getExpensesList, patchItem, deleteItem}): JSX.Element => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})
    useEffect(() => {
        getExpensesList()
    }, [])

    return (
        <div className={classes["cc-expenseList"]}>
            {
                expenseList && expenseList.map(item => {
                    return (
                        <ExpenseItem
                            key={item.id}
                            item={item}
                            patchItem={patchItem}
                            deleteItem={deleteItem}
                        />)
                })
            }
        </div>
    )
}

export {ExpenseList};