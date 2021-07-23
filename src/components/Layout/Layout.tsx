import React from "react";
import {Header} from "../Header";
import useStyles from './Layout.styles';
import {useTheme} from "react-jss";
import {Theme} from "../../styles";
import costIcon1 from '../../assets/images/cost-icon1.svg';
import costIcon2 from '../../assets/images/cost-icon2.svg';
import costIcon3 from '../../assets/images/cost-icon3.svg';
import costIcon4 from '../../assets/images/cost-icon4.svg';
import costIcon5 from '../../assets/images/cost-icon5.svg';
import costIcon6 from '../../assets/images/cost-icon6.svg';

type LayoutProps = {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}): React.ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({theme});

    return (
        <div className={classes["cc-wrapper"]}>
            <div className={classes["cc-wrapper-inner"]}>
                <div className={classes["cc-wrapper-inner-section"]}>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon1} alt="cost icon"/>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon2} alt="cost icon"/>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon3} alt="cost icon"/>
                </div>
                <div className={classes["cc-content"]}>
                    <Header/>
                    <main>
                        {children}
                    </main>
                </div>
                <div className={classes["cc-wrapper-inner-section"]}>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon4} alt="cost icon"/>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon5} alt="cost icon"/>
                    <img className={classes["cc-wrapper-inner-icon"]} src={costIcon6} alt="cost icon"/>
                </div>
            </div>
        </div>
    )
}

export {Layout};