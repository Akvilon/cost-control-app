import {createUseStyles} from "react-jss";
import {
    getBackgroundStyle, getDangerBackgroundStyle,
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
    },
    'cc-expenseItem-delete': {
        height: '19px',
        width: '19px',
        minHeight: '19px',
        minWidth: '19px',
        background: getDangerBackgroundStyle(theme),
        borderRadius: '100%',
        marginLeft: '10px',
        '& button': {
            height: '16px',
            width: '16px',
            minHeight: '16px',
            minWidth: '16px',
            padding:'0',
            color: getReverseFontColorStyle(theme),
            fontSize: '0.5rem',
            fontWeight: '700'
        }
    },
    'cc-expenseItem-delete-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '16px',
        minWidth: '16px',
        height: '16px',
        width: '16px',
        borderRadius: '100%',
        border: `1px solid ${getReverseFontColorStyle(theme)}`
    }
}))