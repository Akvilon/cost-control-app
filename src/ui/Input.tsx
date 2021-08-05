import React, {ChangeEvent, FC} from 'react';
import {useTheme} from "react-jss";
import {Theme} from "../styles";
import useStyles from './Input.styles'

export type InputProps = {
    type: string
    label?: string
    className?: string
    min?: number
    max?: number
    placeholder?: string
    value: string | number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({
                                          type,
                                          label,
                                          className,
                                          placeholder,
                                          min,
                                          max,
                                          value,
                                          onChange
                                      }) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})

    return (
        <div className={`${classes["cc-input"]} ${className}`}>
            {label && <h4>{label}</h4>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
            />
        </div>

    )
}