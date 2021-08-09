import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from "./Home.styles";
import {ExpenseList, TotalCosts} from "../../containers";
import {Button, Input} from "../../ui";
import moment from "moment";
import {ExpenseItemType} from "../../types/ExpenseItemType";
import {TotalList} from "../Total List";

type HomePropsType = {
    addExpenseItem: (title: string, value: number) => void
    expenseList: Array<ExpenseItemType>
}

export const Home: React.FC<HomePropsType> = ({addExpenseItem, expenseList}): JSX.Element => {
    const theme = useTheme<Theme>();
    const classes = useStyles({theme});

    const [inputValue, setInputValue] = useState<string>('')
    const [isItemNameInput, setIsItemNameInput] = useState<boolean>(false)

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInputValue(value)
    }

    const onSubmitHandler = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!inputValue.trim()) {
            return
        } else {
            setIsItemNameInput(false)
            addExpenseItem(inputValue.trim(), 0)
            setInputValue('')
        }
    }

    const onCancelBtnClick = () => {
        setIsItemNameInput(false)
        setInputValue('')
    }

    return (
        <div className={classes["cc-home"]}>
            <section>
                <h3>Create new expense item</h3>

                <div className={classes["cc-home-section"]}>
                    {!isItemNameInput ?
                        <Button
                            type="button"
                            variant="PRIMARY"
                            onClick={() => setIsItemNameInput(true)}>
                            <h3>+</h3>
                        </Button> :

                        <div className={classes['cc-home-name-input']}>
                            <form onSubmit={onSubmitHandler}>
                                <Input
                                    type='text'
                                    autoFocus
                                    placeholder='Enter item name please'
                                    value={inputValue}
                                    onChange={onInputChangeHandler}
                                />

                                <Button
                                    type="submit"
                                    className={classes["cc-home-create-btn"]}
                                    variant="PRIMARY">
                                    <h3>Create</h3>
                                </Button>

                                <Button
                                    type="button"
                                    className={classes["cc-home-cancel-btn"]}
                                    variant="DANGER"
                                    onClick={onCancelBtnClick}>
                                    <h3>Cancel</h3>
                                </Button>
                            </form>
                        </div>
                    }
                </div>

                <ExpenseList/>
            </section>

            <section>
                <div className={classes["cc-home-date"]}>
                    <h3>{moment().format('DD.MM.YYYY')}</h3>
                    <div className={classes["cc-home-date-stub"]}></div>
                </div>

                <div className={classes["cc-home-total"]}>
                    <TotalCosts/>
                    <TotalList expenseList={expenseList}/>
                </div>
            </section>
        </div>
    )
}
