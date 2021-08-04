import React, {ChangeEvent, FC, SyntheticEvent, useState} from 'react'
import {ExpenseItemType} from "../../types/ExpenseItemType";
import useStyles from './ExpenseItem.styles'
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import {Button, Input} from "../../ui";
import editIcon from '../../assets/images/edit.svg';

type ExpenseItem = {
    item: ExpenseItemType
    onTitleChangeHandler: (field: string, value: string | number, id: string | undefined) => void
}

export const ExpenseItem: FC<ExpenseItem> = ({item, onTitleChangeHandler}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})
    const [inputValue, setInputValue] = useState<string>('')
    const [titleValue, setTitleValue] = useState<string>(`${item.title}`)
    const [isEditTitle, setIsEditTitle] = useState<boolean>(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInputValue(value)
    }
    const onTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setTitleValue(value)
    }
    const onEditBtnClick = () => {
        setIsEditTitle(true)
    }
    const onTitleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!titleValue.trim()) {
            return
        } else {
            setIsEditTitle(false)
            onTitleChangeHandler('title',titleValue.trim(), item.id)
        }
    }
    return (
        <div className={classes["cc-expenseItem"]}>
            {
                isEditTitle ?
                    <form onSubmit={onTitleFormSubmit}>
                        <Input
                            type="text"
                            value={titleValue}
                            onChange={onTitleInputChange}
                        />
                    </form> : <h4>{titleValue}</h4>
            }
            <Button
                type="button"
                variant="TEXT"
                className={classes["cc-expenseItem-edit-btn"]}
                onClick={onEditBtnClick}>
                <img src={editIcon} className={classes["cc-expenseItem-edit"]} alt="edit icon"></img>
            </Button>

            <form>
                <Input
                    type="text"
                    className={classes["cc-expenseItem-input"]}
                    value={inputValue}
                    onChange={onInputChange}/>
                <Button
                    type="submit"
                    variant="SECONDARY"
                    className={classes["cc-expenseItem-amend-btn"]}>
                    <h3>Amend</h3>
                </Button>
            </form>
        </div>
    )
}