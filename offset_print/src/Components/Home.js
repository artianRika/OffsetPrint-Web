import Footer from "./Footer";
import "./Home.css"

import offsetPrintPhotoBW from "../offsetPrintKicevoBW.jpg"

const Home = () =>{
    return(

        <div className={"home"}>

            <div className={"homeTopPart"}>
                <div className={"topLeft"}>
                    <h1>Welcome to Offset Print</h1>
                    <p>At Offset Print, we bring your ideas to life with precision, quality, and efficiency. As a
                        leading offset printing factory, we specialize in delivering high-quality print solutions
                        tailored to meet your unique needs.</p>
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