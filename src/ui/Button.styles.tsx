import {createUseStyles} from "react-jss";
import {
    getBackgroundStyle,
    getDangerBackgroundStyle, getFontColorStyle,
    getReverseBackgroundStyle,
    getReverseFontColorStyle,
    Theme
} from "../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-button': {
        height: '28px',
        padding: '0px 10px',
        fontSize: '0.750rem',
        border: 'none',
        borderRadius: '2px',
        cursor: 'pointer',
    },
    'cc-button-primary': {
        background: getReverseBackgroundStyle(theme),
        color: getReverseFontColorStyle(theme)
    },
    'cc-button-secondary': {
        background: getBackgroundStyle(theme),
        color: getReverseFontColorStyle(theme)
    },
    'cc-button-danger': {
        background: getDangerBackgroundStyle(theme),
        color: getReverseFontColorStyle(theme)
    },
    'cc-button-text': {
        background: 'none',
        color: getFontColorStyle(theme)
    }
}))