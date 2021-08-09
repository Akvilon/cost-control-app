import {FC} from "react";
import {useTheme} from "react-jss";
import {ExpenseItemType} from "../../types/ExpenseItemType";
import useStyles from './TotalList.styles';
import {Theme} from "../../styles";

export type TotalListPropsType = {
    expenseList: Array<ExpenseItemType>
}

export const TotalList: FC<TotalListPropsType> = ({expenseList}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})

    return (
        <div className={classes["cc-totalList"]}>
            {
                expenseList && expenseList.map(item => {
                    return (
                        <div className={classes["cc-totalList-row"]} key={item.id}>
                            <h3>{item.title}</h3>
                            <h3>{item.value} uah</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}