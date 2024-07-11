import contactBanner from "../contactUsPhoto.jpg"
import "./Contact.css"
import fbIcon from "../fb_icon.png"
import instaIcon from "../insta_icon.png"
import inIcon from "../in_icon.png"

const Contact = () => {

    const workingHours = [

        {day: "Monday", hours: "8:30 - 17:30"},
        {day: "Tuesday", hours: "8:30 - 17:30"},
        {day: "Wednesday", hours: "8:30 - 17:30"},
        {day: "Thursday", hours: "8:30 - 17:30"},
        {day: "Friday", hours: "8:30 - 17:30"},
        {day: "Saturday", hours: "8:30 - 17:30"},
        {day: "Sunday", hours: "closed"},
    ]


    return(

        <div className={"contactDiv"}>

            <div className={"topPart"}>
                <img src={contactBanner}/>
                <div className={"headingBackground"}>
                    <h1 className={"contactUsHeading"}>you'd better Contact Us</h1>
                </div>
            </div>

            <div className={"middlePart"}>

                <div className={"mainContainer"}>
                    <div className={"containerLeft"}>
                        <h2>Get in touch</h2>
                        <p>Email: <a href={`mailto:offset.print.mk@gmail.com`}>offset.print.mk@gmail.com</a></p>
                        <p>Phone: +389 70 223 196</p>
                        <p>Fax: +389 45 225 236</p>
                        <pre>Address: Rudnicka bb. Kicevo 6250 North Macedonia</pre>
                    </div>


                    <div className={"containerRight"}>
                        <h2>Business Hours</h2>
                        <table>
                            <tbody>

                            {   workingHours.map((entry) =>{
                                return(

                            <tr>
                                    <td>{entry.day}</td>
                                    <td>{entry.hours}</td>
                            </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className={"socialMediaRow"}>
                    <img className={"fbIcon"} src={fbIcon}  width="90" height="90"/>
                    <img className={"instaIcon"} src={instaIcon} width={80} height={80}/>
                    <img className={"inIcon"} src={inIcon}  width="90" height="90"/>
                </div>

            </div>


        </div>

    )
}

export default Contact;