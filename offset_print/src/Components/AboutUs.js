import "./AboutUs.css"
import Blog from "./Blog";
import Footer from "./Footer";
import oldPhoto from "../oldFctory.jpg"
import safetRika from "../safetRika.jpeg"
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation()
    return(

        <div className={"aboutUs"}>

            <h2 id={"aboutUsHeading"}>{t('about_us.aboutUs')}</h2>

            <div className={"blogContainer"}>
                <Blog id={"ceoPhoto"} className={"blog"} title={t('about_us.ceo')} hasImage={true} image={safetRika} textContent={`<a href='https://mk.linkedin.com/in/safet-rika-a2834bb'>Safet Rika</a>, `+ t('about_us.ceoTextContent')}/>
                <Blog className={"blog"} title={t('about_us.ourMission')} textContent={t('about_us.ourMissionTextContent')}/>
                <Blog className={"blog"} title={t('about_us.whatWeDo')} textContent={t('about_us.whatWeDoTextContent')}/>
                <Blog className={"blog"} hasImage={true} image={oldPhoto} title={t('about_us.ourStory')} textContent={t('about_us.ourStoryTextContent')}/>
            </div>

            <Footer/>
        </div>

    )
}


export default AboutUs;
