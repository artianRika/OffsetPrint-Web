import "./Navbar.css"
import logo from "../logo_op_bw.png"
import {Link} from "react-router-dom";

import albanianFlag from "../albanianFlag.jpg"
import englishFlag from "../englishFlag.jpg"
import macedonianFlag from "../macedonianFlag.jpg"
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className={"navbarDiv"}>
            <nav className={"navbar"}>
                <Link to={"/home"}>
                    <img draggable={false} src={logo} width={"80px"}/>
                </Link>

                <ul>
                    <Link to={"/home"}><li>{t('navbar.home')}</li></Link>
                    <Link to={"/products"}><li>{t("navbar.products")}</li></Link>
                    <Link to={"/about-us"}><li>{t("navbar.about-us")}</li></Link>
                    <Link to={"/contact"}><li>{t("navbar.contact")}</li></Link>
                </ul>


                <div className={"languageSelectorDiv"}>
                    <div className={"flagContainer"}>
                        <img src={englishFlag} onClick={() => i18n.changeLanguage("en")}/>
                        <img src={albanianFlag} onClick={() => i18n.changeLanguage("sq")}/>
                        <img src={macedonianFlag} onClick={() => i18n.changeLanguage("mk")}/>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;