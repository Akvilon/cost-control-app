import React from "react";
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import useStyles from "./Header.styles";
import {Link} from "react-router-dom";

const Header:React.FC = (): React.ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({theme});

    return (
        <header className={classes["cc-header"]}>
            <p>Cost Control</p>
            <nav>
                <Link to={'/'}>HOME</Link>
                <Link to={'/history'}>HISTORY</Link>
            </nav>
        </header>
    )
}

export {Header};