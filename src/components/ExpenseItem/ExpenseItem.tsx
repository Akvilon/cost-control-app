import React, {FC} from 'react'
import {ExpenseItemType} from "../../types/ExpenseItemType";
import useStyles from './ExpenseItem.styles'
import {useTheme} from "react-jss";
import {Theme} from "../../styles";

type ExpenseItem = {
    item: ExpenseItemType
}

export const ExpenseItem: FC<ExpenseItem> = ({item}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})
    return (
        <div className={classes["cc-expenseItem"]}>
            <form>
                <h2>{item.title}</h2>
                <input type="text"/>
                <button type='submit'>Amend</button>
            </form>
        </div>
    )
}