import Footer from "./Footer";
import "./Home.css"

import CarouselFadeExample from "./CarouselFadeExample";

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
                    <CarouselFadeExample/>
                </div>
            </div>

            <div className={"homeMiddlePart"}>

                <h2>Why Choose Us?</h2>
                <p>Superior Quality: Our state-of-the-art offset printing technology ensures every print is vibrant,
                    sharp,
                    and true to your vision.
                    Expert Team: With years of experience, our team of printing professionals is dedicated to providing
                    exceptional service and support.
                    Eco-Friendly Practices: We are committed to sustainability, using eco-friendly inks and materials to
                    minimize our environmental impact.
                    Custom Solutions: From business cards and brochures to large format prints, we offer a wide range of
                    customizable printing options to suit your needs.
                    Competitive Pricing: Get premium quality at competitive rates, ensuring you receive the best value
                    for
                    your investment.
                </p>

            </div>


            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Footer/>
        </div>

    )
}

export default Home;