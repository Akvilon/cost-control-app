import React, {ChangeEvent, FC, SyntheticEvent} from 'react';
import {useTheme} from "react-jss";
import {Theme} from "../styles";
import useStyles from './Input.styles'

export type InputProps = {
    type: string
    label?: string
    placeholder?: string
    value: string | number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({type, label, placeholder, value, onChange}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})

    return (
        <div className={classes["cc-input"]}>
            {label && <h4>{label}</h4>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>

    )
}