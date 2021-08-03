import {createUseStyles} from "react-jss";
import {Theme} from "../../styles";


export default createUseStyles((theme: Theme) => ({
    ['cc-expenseItem']: {
        '& form': {
            display: 'flex'
        }
    }
}))