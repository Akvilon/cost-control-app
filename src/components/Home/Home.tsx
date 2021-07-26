import React, {useState} from "react";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from "./Home.styles";
import {ExpenseList} from "../Expense List";

const Home:React.FC = (): JSX.Element => {
    const theme = useTheme<Theme>();
    const classes = useStyles({theme});
    const [isHiddenPopup, setIsHiddenPopup] = useState<boolean>(true)

    const addExpenseItemHandler = () => {

    }

    return (
        <div className={classes["cc-home"]}>
            <section>
                <h3>Add new expense item</h3>
                <button
                    className={classes['cc-home-btn']}
                    onClick={() => setIsHiddenPopup(false)}
                >+
                </button>

                { !isHiddenPopup &&
                <div className={classes['cc-home-popup']}>
                    <button onClick={() => setIsHiddenPopup(true)}>x</button>
                </div>
                }

                <hr/>

            <ExpenseList />
            </section>
            <section>

            </section>
        </div>
    )
}

export {Home};