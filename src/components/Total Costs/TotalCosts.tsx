import {FC, useEffect, useState} from "react";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from './TotalCosts.styles';

export type TotalCostsPropsType = {
    totalCosts: number
}

export const TotalCosts: FC<TotalCostsPropsType> = ({totalCosts}) => {
    const theme = useTheme<Theme>()
    const classes = useStyles({theme})
    const [costsStyle, setCostsStyle] = useState<string>('')

    useEffect(() => {
       setCostsStyle(`${classes["cc-totalCost-value-animation"]}`);

        const cancelTotalStyles = setTimeout(() => {
            setCostsStyle('')
        },2000);
        return () => clearTimeout(cancelTotalStyles)
    }, [totalCosts])

    return (
        <>
            <h2 className={classes["cc-total-title"]}>You spent this month:</h2>
            <div className={classes["cc-totalCosts"]}>
                <div className={classes["cc-totalCosts-inner"]}>
                    <h1 className={costsStyle}>{totalCosts} UAH</h1>
                </div>
            </div>

        </>
    )
}