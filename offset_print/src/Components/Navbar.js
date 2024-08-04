import "./Navbar.css"
import logo from "../logo_op_bw.png"
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={"navbarDiv"}>
            <nav className={"navbar"}>
                <Link to={"/home"}>
                    <img draggable={false} src={logo} width={"80px"}/>
                </Link>

                <ul>
                    <Link to={"/home"}><li>Home</li></Link>
                    <Link to={"/products"}><li>Products</li></Link>
                    <Link to={"/about-us"}><li>About Us</li></Link>
                    <Link to={"/contact"}><li>Contact</li></Link>
                </ul>


                <div className={"languageSelectorDiv"}>
                    <select className={"languageSelector"}>
                        <option value="en">English</option>
                        <option value="al">Shqip</option>
                        <option value="en">Македонски</option>
                    </select>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;