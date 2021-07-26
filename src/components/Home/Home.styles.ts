import {createUseStyles} from "react-jss";
import {getBackgroundStyle, getFontColorStyle, Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-home': {
        display: 'flex',
        width: '100%',
        '& section': {
            width: '40%',
            position: 'relative',
        },
        '& section:last-child': {
            width: '60%'
        }
    },
    'cc-home-btn': {
        height: '40px',
        width: '40px',
        background: 'none',
        border: `1px solid ${getFontColorStyle(theme)}`,
        borderRadius: '4px',
        margin: '20px 0px',
        fontSize: '1.5 rem',
        cursor: 'pointer'
    },
    'cc-home-popup': {
        position: 'absolute',
        top: '20px',
        left: '20px',
        height: '100px',
        width: '300px',
        background: getBackgroundStyle(theme),
        border: '1px solid'
    }
}))