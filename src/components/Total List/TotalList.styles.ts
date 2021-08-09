import {createUseStyles} from "react-jss";
import {Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-totalList': {
        width: '100%',
        padding: '0 70px',
        marginTop: '40px'
    },
    'cc-totalList-row': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
    }
}))