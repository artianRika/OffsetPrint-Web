import "./Footer.css"
import logo_short from "../logo_op_short.png"

const Footer = () =>{

    return(
<div className={"wrapper"}>

            <div className={"footer"}>
                    <div className={"divider"}></div>
                    <div className={"custom-class"}>
                        <img draggable={false} className={"logoShort"} src={logo_short}/>
                        <span>The pressure that leaves an impression!</span>
                        <span>Copyright &copy; 2024 Offset Print</span>
                    </div>
            </div>

</div>
    )
}

export default Footer;