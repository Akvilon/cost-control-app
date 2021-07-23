import {createUseStyles} from "react-jss";
import {base, Theme} from "../../styles";

export default createUseStyles((theme: Theme) => ({
    ...base(theme),
    'cc-wrapper': {
        height: '100%',
        width: '100%',
        background: theme.colors.wrapperBackground
    },
    'cc-wrapper-inner': {
        display: 'flex',
        width: '100%',
        height: '100%',
        boxShadow: '0 0 1rem 0 rgba(41, 39, 39, 0.2)',
        borderRadius: '3px',
        position: 'relative',
        zIndex: '1',
        background: 'inherit',
        overflow: 'hidden',
        '&:before': {
            content: "",
            position: 'absolute',
            background: 'inherit',
            zIndex: '-1',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boxShadow: 'inset 0 0 2000px rgba(241, 241, 241, 0.5)',
            filter: 'blur(10px)',
            margin: '-20px',
        },
    },
    'cc-wrapper-inner-section': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        flexGrow: '1'
    },
    'cc-wrapper-inner-icon': {
        height: '100px',
        width: '100px'
    },
    'cc-content': {
        height: '100%',
        width: '960px',
        background: '#fff'
    }
}))