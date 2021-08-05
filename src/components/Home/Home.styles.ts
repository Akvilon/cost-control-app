import {createUseStyles} from "react-jss";
import {getFontColorStyle, getReverseFontColorStyle, Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-home': {
        display: 'flex',
        height: 'inherit',
        width: '100%',
        '& section': {
            width: '45%',
            position: 'relative',
        },
        '& section:last-child': {
            width: '55%'
        }
    },
    'cc-home-section': {
        display: 'flex',
        alignItems: 'center',
        height: '60px'
    },
    'cc-home-plus-btn': {
        height: '40px',
        width: '40px',
        background: getFontColorStyle(theme),
        color: getReverseFontColorStyle(theme),
        border: `1px solid ${getFontColorStyle(theme)}`,
        borderRadius: '4px',
        fontSize: '1.5rem',
        cursor: 'pointer'
    },
    'cc-home-create-btn': {
        marginLeft: '16px'
    },
    'cc-home-cancel-btn': {
        marginLeft: '10px'
    },
    'cc-home-name-input': {
        '& form': {
            display: 'flex'
        }
    },
    'cc-home-date': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& h2': {
            borderBottom: `1px solid ${getFontColorStyle(theme)}`
        }
    },
    'cc-home-date-stub': {
        height: '60px',
        width: '100%'
    },
    'cc-home-total': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))