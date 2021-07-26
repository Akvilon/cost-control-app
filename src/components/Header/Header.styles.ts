import {getReverseFontColorStyle, getWrapperBackgroundStyle, Theme} from "../../styles";
import {createUseStyles} from "react-jss";

export default createUseStyles((theme: Theme) => ({
    'cc-header': {
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        background: "transparent",
        padding: '0px 20px'
    },
    'cc-header-logo': {
        color: getReverseFontColorStyle(theme),
        fontSize: '2rem',
        marginRight: '30px'
    },
    'cc-header-nav': {
        display: 'flex',
        '& a': {
            display: 'block',
            color: getReverseFontColorStyle(theme),
            margin: '0px 30px'
        }
    }
}))