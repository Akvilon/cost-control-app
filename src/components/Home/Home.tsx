import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from "./Home.styles";
import {ExpenseList} from "../../containers";
import {Input} from "../../ui";

type HomePropsType = {
    addExpenseItem: (title: string, value: number) => void
}

const Home: React.FC<HomePropsType> = ({addExpenseItem}): JSX.Element => {
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
        setIsItemNameInput(false)
        addExpenseItem(inputValue, 0)
        setInputValue('')
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
                        <button
                            className={classes['cc-home-plus-btn']}
                            onClick={() => setIsItemNameInput(true)}
                        >+
                        </button> :

                        <div className={classes['cc-home-name-input']}>
                            <form onSubmit={onSubmitHandler}>
                                <Input type='text' value={inputValue} onChange={onInputChangeHandler}/>

                                <button type="submit" className={classes['cc-home-create-btn']}>Create</button>
                                <button type="button"
                                        className={classes['cc-home-cancel-btn']}
                                        onClick={onCancelBtnClick}
                                >CANCEL
                                </button>
                            </form>
                        </div>
                    }
                </div>

                <hr/>

                <ExpenseList/>
            </section>
            <section>

            </section>
        </div>
    )
}

export {Home};