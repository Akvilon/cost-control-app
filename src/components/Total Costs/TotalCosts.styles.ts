import {createUseStyles} from "react-jss";
import {getReverseBackgroundStyle, getReverseFontColorStyle, Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-total-title': {
        paddingBottom: '20px',
    },
    'cc-totalCosts': {
        height: '220px',
        width: '220px',
        borderRadius: '100%',
        background: getReverseBackgroundStyle(theme),
        '& h1': {
            color: getReverseFontColorStyle(theme),
        }
    },
    'cc-totalCosts-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        width: '200px',
        minHeight: '200px',
        minWidth: '200px',
        borderRadius: '100%',
        border: `5px solid ${getReverseFontColorStyle(theme)}`
    },
    '@keyframes titleAnimation': {
        '0%': {
            transform: 'scale(1)'
        },
        '50%': {
            transform: 'scale(1.3)'
        },
        '100%': {
            transform: 'scale(1)'
        }
    },
    'cc-totalCost-value-animation': {
        animation: '1s $titleAnimation'
    }
}))