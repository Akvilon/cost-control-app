import {createUseStyles} from "react-jss";
import {getFontColorStyle, getReverseFontColorStyle, Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-home': {
        display: 'flex',
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
    }
}))