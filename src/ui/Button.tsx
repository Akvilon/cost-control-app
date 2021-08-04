import React, {FC, MouseEventHandler} from 'react';
import {useTheme} from "react-jss";
import {Theme} from "../styles";
import useStyles from './Button.styles'

export type ButtonProps = {
    type: 'button' | 'submit' | 'reset' | undefined
    className?: string
    children: React.ReactNode
    variant?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

enum ButtonVariants {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    DANGER = 'DANGER',
    TEXT='TEXT'
}

export const Button: FC<ButtonProps> = ({
                                            type,
                                            className,
                                            children,
                                            variant,
                                            onClick}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})

    return (
            <button
                className={
                    variant === ButtonVariants.PRIMARY ? `${classes["cc-button"]} ${classes["cc-button-primary"]} ${className}`
                        : variant === ButtonVariants.SECONDARY ? `${classes["cc-button"]} ${classes['cc-button-secondary']} ${className}`
                        : variant === ButtonVariants.DANGER ? `${classes["cc-button"]} ${classes['cc-button-danger']} ${className}`
                            : variant === ButtonVariants.TEXT ? `${classes["cc-button"]} ${classes['cc-button-text']} ${className}` : className
                }
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
    )
}