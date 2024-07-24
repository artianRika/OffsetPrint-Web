import "./AboutUs.css"
import Blog from "./Blog";
import Footer from "./Footer";
import oldPhoto from "../oldFctory.jpg"

const AboutUs = () => {
    return(

        <div className={"aboutUs"}>

            <h2 id={"aboutUsHeading"}>About Us</h2>

            <div className={"blogContainer"}>
                <Blog className={"blog"} title={"CEO"} textContent={"<a href='https://mk.linkedin.com/in/safet-rika-a2834bb'>Safet Rika</a>, Founder & CEO of Offset Print, professional in operating printing machines and passionate about customer service."}/>
                <Blog className={"blog"} title={"Our Mission"} textContent={"Our mission is to consistently deliver high-caliber printing solutions that exceed customer expectations through dedication to precision and innovation, ensuring unparalleled quality and satisfaction."}/>
                <Blog className={"blog"} title={"What we do"} textContent={"We are specialized in offset printing, offering a wide range of products including books, newspapers, magazines, notebooks, business cards, and more. <a href='Products.js'>To Products</a>"}/>
                <Blog className={"blog"} hasImage={true} image={oldPhoto} title={"Our Story"} textContent={"Founded in 2007, our printing house started with a love for offset printing. Over the years, we have grown and expanded our services to meet the diverse needs of our clients..\n"}/>
            </div>

            <Footer/>
        </div>

    )
}


export default AboutUs;
