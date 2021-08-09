import React, {ChangeEvent, FC, SyntheticEvent, useState} from 'react'
import {ExpenseItemType} from "../../types/ExpenseItemType";
import useStyles from './ExpenseItem.styles'
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import {Button, Input} from "../../ui";
import editIcon from '../../assets/images/edit.svg';

type ExpenseItem = {
    item: ExpenseItemType
    patchItem: (field: string, value: string | number, id: string | undefined) => void
    deleteItem: (id: string | undefined) => void
}

export const ExpenseItem: FC<ExpenseItem> = ({item, patchItem, deleteItem}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})
    const [costInputValue, setCostInputValue] = useState<number>(0)
    const [titleValue, setTitleValue] = useState<string>(`${item.title}`)
    const [isEditTitle, setIsEditTitle] = useState<boolean>(false)

    const onCostInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setCostInputValue(+value)
    }
    const onTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setTitleValue(value)
    }
    const onEditBtnClick = () => {
        setIsEditTitle(!isEditTitle)
        setTitleValue(item.title as string)
    }
    const deleteItemHandler = (id: string | undefined) => {
        deleteItem(id)
    }
    const onTitleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!titleValue.trim()) return

        setIsEditTitle(false)
        patchItem('title', titleValue.trim(), item.id)

    }

    const onCostFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!costInputValue) return

        setCostInputValue(0)
        patchItem('value', costInputValue, item.id)
    }
    return (
        <div className={classes["cc-expenseItem"]}>
            {
                isEditTitle ?
                    <form onSubmit={onTitleFormSubmit}>
                        <Input
                            type="text"
                            value={titleValue}
                            min={0}
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

            <form onSubmit={onCostFormSubmit}>
                <Input
                    type="text"
                    className={classes["cc-expenseItem-input"]}
                    value={costInputValue}
                    onChange={onCostInputChange}/>
                <Button
                    type="submit"
                    variant="SECONDARY"
                    className={classes["cc-expenseItem-amend-btn"]}>
                    <h3>Amend</h3>
                </Button>
            </form>

            <div className={classes["cc-expenseItem-delete"]}>
                <div className={classes["cc-expenseItem-delete-inner"]}>
                    <Button
                        type="button"
                        variant="TEXT"
                        onClick={() => deleteItemHandler(item.id)}
                    >&#10006;</Button>
                </div>
            </div>
        </div>
    )
}