import {createUseStyles} from "react-jss";
import {getFontColorStyle, Theme} from "../styles";


export default createUseStyles((theme: Theme) => ({
    'cc-input': {
        '& input': {
            height: '30px',
            width: '100%',
            borderRadius: '2px',
            border: `1px solid ${getFontColorStyle(theme)}`,
            paddingLeft: '16px'
        }
    }
}))