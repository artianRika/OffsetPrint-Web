import contactBanner from "../contactUsPhoto.jpg"
import "./Contact.css"

const Contact = () => {
    return(

        <div className={"contactDiv"}>

            <div className={"topPart"}>
                <img src={contactBanner}/>
                <div className={"headingBackground"}>
                    <h1 className={"contactUsHeading"}>you'd better Contact Us</h1>
                </div>

            </div>

        </div>

    )
}

export default Contact;