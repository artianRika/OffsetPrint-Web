import "./Navbar.css"
import logo from "../logo512.png"

const Navbar = () =>{
    return(

    <div className={"navbarDiv"}>
        <nav className={"navbar"}>
            <img src={logo} width={"70px"}/>

            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

            <div className={"languageSelectorDiv"}>
                <select className={"languageSelector"}>
                    <option value="en">English </option>
                    <option value="al">Shqip</option>
                    <option value="en">Македонски</option>
                </select>
            </div>
        </nav>
    </div>

    )
}

export default Navbar;