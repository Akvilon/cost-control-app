import {createUseStyles} from "react-jss";
import {
    getBackgroundStyle,
    getFontColorStyle,
    getReverseFontColorStyle, getWrapperBackgroundStyle,
    Theme
} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    ['cc-expenseItem']: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        background: getWrapperBackgroundStyle(theme),
        marginTop: '10px',
        borderRadius: '2px',
        '&:first-child': {
            marginTop: '0',
        },
        '& form': {
            display: 'flex',
            alignItems: 'center'
        },
        '& h4': {
            color: getReverseFontColorStyle(theme),
            paddingRight: '16px'
        }
    },
    'cc-expenseItem-input': {
        maxWidth: '60px',
        '& input': {
            textAlign: 'center',
            paddingLeft: '0 !important'
        }
    },
    'cc-expenseItem-edit-btn': {
        background: 'none',
        marginLeft: 'auto'
    },
    'cc-expenseItem-amend-btn': {
        background: getBackgroundStyle(theme),
        marginLeft: '10px',
        '& h3': {
            color: getFontColorStyle(theme),
            padding: '0'
        }
    },
    'cc-expenseItem-edit': {
        height: '20px',
        width: '20px',
    }
}))