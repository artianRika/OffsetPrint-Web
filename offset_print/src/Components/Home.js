import Footer from "./Footer";
import "./Home.css"

import offsetPrintPhotoBW from "../offsetPrintKicevoBW.jpg"
import {useTranslation} from "react-i18next";



const Home = () =>{
    const { t} = useTranslation();

    return(

        <div className={"home"}>

            <div className={"homeTopPart"}>
                <div className={"topLeft"}>
                    <h1>{t('home.welcomeHeading')}</h1>
                    <p>{t('home.welcomeParagraph')}</p>
                </div>

                <div className="topRight">
                        <img src={offsetPrintPhotoBW}/>
                </div>
            </div>


            <Footer/>
        </div>

    )
}

export default Home;