import contactBanner from "../contactUsPhoto.jpg"
import "./Contact.css"
import fbIcon from "../fb_icon.png"
import instaIcon from "../insta_icon.png"
import inIcon from "../in_icon.png"
import ContactForm from "./ContactForm";
import Footer from './Footer'

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
                    <h1 className={"contactUsHeading"}>you'd better contact us</h1>
                </div>
            </div>

            <div className={"middlePart"}>

                <div className={"mainContainer"}>
                    <div className={"containerLeft"}>
                        <h2>Get in touch</h2>
                        <p>Email: <a href={`mailto:offset.print.mk@gmail.com`}>offset.print.mk@gmail.com</a></p>
                        <p>Phone: +389 70 223 196</p>
                        <p>Fax: +389 45 225 236</p>
                        <pre><a href={"https://maps.app.goo.gl/i5RL2pSSVMWSpxD19"}>Address: Rudnicka bb. Kicevo 6250 North Macedonia</a></pre>
                    </div>


                    <div className={"containerRight"}>
                        <h2>Business Hours</h2>
                        <table>
                            <tbody>

                            {workingHours.map((entry) => {
                                return (

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
                    <a href={"https://www.facebook.com/p/Offset-Print-100063957314082/?locale=en_EN"}> <img
                        className={"fbIcon"} src={fbIcon} width="60" height="60"/></a>
                    <a href={"https://www.instagram.com/offset_print/"}> <img className={"instaIcon"} src={instaIcon}
                                                                              width="54" height="54"/></a>
                    <a href={"https://mk.linkedin.com/in/safet-rika-a2834bb"}><img className={"inIcon"} src={inIcon}
                                                                                   width="60" height="60"/></a>
                </div>

            </div>

            <div className={"contactForm"}>

                <ContactForm/>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.89449553286!2d20.956140274584943!3d41.506561088596925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351364ecd24bcfb%3A0x524dd00c5bf627a8!2sOffset%20Print!5e0!3m2!1ssq!2smk!4v1720785764412!5m2!1ssq!2smk"
                width="400" height="400" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Footer/>

        </div>

    )
}

export default Contact;