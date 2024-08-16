import "./Navbar.css";
import logo from "../logo_op_bw.png";
import { Link } from "react-router-dom";
import albanianFlag from "../albanianFlag.jpg";
import englishFlag from "../englishFlag.jpg";
import macedonianFlag from "../macedonianFlag.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={"navbarDiv"}>
            <nav className={"navbar"}>
                <Link to={"/home"}>
                    <img draggable={false} src={logo} width={"80px"} alt="logo" />
                </Link>

                <ul className={"navbarList"}>
                    <Link to={"/home"}>
                        <li>{t("navbar.home")}</li>
                    </Link>
                    <Link to={"/products"}>
                        <li>{t("navbar.products")}</li>
                    </Link>
                    <Link to={"/about-us"}>
                        <li>{t("navbar.about-us")}</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li>{t("navbar.contact")}</li>
                    </Link>
                </ul>

                <div className={"languageSelectorDiv"}>
                    <div className={"flagContainer"}>
                        <img
                            src={englishFlag}
                            onClick={() => i18n.changeLanguage("en")}
                            alt="English"
                        />
                        <img
                            src={albanianFlag}
                            onClick={() => i18n.changeLanguage("sq")}
                            alt="Albanian"
                        />
                        <img
                            src={macedonianFlag}
                            onClick={() => i18n.changeLanguage("mk")}
                            alt="Macedonian"
                        />
                    </div>
                </div>

                <div className={"burger"} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

            <div className={`smallList ${menuOpen ? "active" : ""}`}>
                <ul>
                    <Link to={"/home"} onClick={toggleMenu}>
                        <li>{t("navbar.home")}</li>
                    </Link>
                    <Link to={"/products"} onClick={toggleMenu}>
                        <li style={{backgroundColor: "#dfdfdf"}}>{t("navbar.products")}</li>
                    </Link>
                    <Link to={"/about-us"} onClick={toggleMenu}>
                        <li>{t("navbar.about-us")}</li>
                    </Link>
                    <Link to={"/contact"} onClick={toggleMenu}>
                        <li style={{backgroundColor: "#dfdfdf"}}>{t("navbar.contact")}</li>
                    </Link>

                </ul>
                        <div className={"flagSmallContainer"}>
                        <img
                            src={englishFlag}
                            onClick={() => i18n.changeLanguage("en")}
                            alt="English"
                        />
                        <img
                            src={albanianFlag}
                            onClick={() => i18n.changeLanguage("sq")}
                            alt="Albanian"
                        />
                        <img
                            src={macedonianFlag}
                            onClick={() => i18n.changeLanguage("mk")}
                            alt="Macedonian"
                        />
                    </div>
            </div>
        </div>
    );
};

export default Navbar;
