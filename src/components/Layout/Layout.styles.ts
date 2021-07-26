import {createUseStyles} from "react-jss";
import {base, getBackgroundStyle, getWrapperBackgroundStyle, Theme} from "../../styles";

export default createUseStyles((theme: Theme) => ({
    ...base(theme),
    'cc-wrapper': {
        display: 'flex',
        height: '100%',
        width: '100%',
        background: getWrapperBackgroundStyle(theme)
    },
    'cc-wrapper-inner-section': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
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
    },
    'cc-main': {
        height: 'calc(100% - 80px)',
        padding: '20px',
        background: getBackgroundStyle(theme)
    }
}))