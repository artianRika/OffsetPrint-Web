import Footer from "./Footer";
import Product from "./Product";
import "./Products.css"
import book from "../books.png"
import notebook from "../notebook.jpg"
import eventTicket from "../eventTicket.jpg"
import flyer from "../flyer.png"
import calendar from "../calendar.jpg"
import menu from "../menu.jpg"
import envelopes from "../envelopes.png"
import banner from "../banner.jpg"
import businessCard from "../businessCard.jpg"
import brochures from "../brochures.jpeg"
import ncrPads from "../ncrPads.jpg"
import lighter from "../lighter.png"
import tshirt from "../tshirt.jpg"
import pen from "../pen.jpg"
import hotFoil from "../hotFoil.jpg"


const Products = () => {
    return(
        <div className={"products"}>
            <h2>Products</h2>

            <div className={"productsContainer"}>
                <Product title={"Books"}
                         textContent={"Professionally printed books with crisp text and vibrant images. Available in various sizes and binding options, ideal for authors, publishers, and businesses."}
                         image={book}/>
                <Product title={"Custom Notebooks"}
                         textContent={"Our Customizable Notebooks are ideal for capturing ideas, taking notes, and planning projects. Personalise your unique and functional promotional item!"}
                         image={notebook}/>
                <Product title={"Business Cards"}
                         textContent={"Elevate your professional presence with Premium Business Cards. Perfect for networking events, client meetings, and everyday business interactions."}
                         image={businessCard}/>
                <Product title={"NCR Pads"}
                         textContent={"Customizable NCR Pads for creating instant duplicates of invoices, receipts, and order forms. Perfect for efficient business operations"}
                         image={ncrPads}/>
                <Product title={"Promotional Flyers"}
                         textContent={"Promotional Flyers as an effective marketing tool, with customizable templates to meet your needs."}
                         image={flyer}/>
                <Product title={"Brochures"}
                         textContent={"Deliver your message with clarity and style using our Professional Brochures. Ideal for marketing campaigns, product information, and corporate profiles."}
                         image={brochures}/>
                <Product title={"Menus"}
                         textContent={"High-quality, customizable menus for restaurants, cafes, and bars. Available in various formats and finishes."}
                         image={menu}/>
                <Product title={"Custom Calendars"}
                         textContent={"Keep your brand in front of clients all year long with a Personalized Calendar. Available in wall, desk, and pocket formats."}
                         image={calendar}/>
                <Product title={"Event Tickets"}
                         textContent={"Durable and customizable event tickets with security features. Ideal for concerts, festivals, and shows."}
                         image={eventTicket}/>

                <Product title={"Hot Foil Print"}
                         textContent={"Special type of printing for creating impressing wedding invitations, tickets and other stuff."}
                    image={hotFoil}
                />

                <Product title={"Banners"}
                         textContent={"Weather-resistant banners for indoor and outdoor use. Custom sizes and high-resolution printing."}
                         image={banner}/>
                <Product title={"Stationery"}
                         textContent={"Elegant stationery sets including letterheads, envelopes, and notepads. Perfect for corporate branding."}
                         image={envelopes}/>
                <Product title={"T-Shirts"}
                         textContent={"Comfortable and stylish custom T-shirts. Perfect for promotional events, team uniforms, and everyday wear."}
                         image={tshirt}/>
                <Product title={"Pens"}
                         textContent={"High-quality, customizable pens for everyday use. Ideal for branding, promotions, and corporate gifts."}
                         image={pen}/>
                <Product title={"Lighters"}
                         textContent={"Reliable and customizable lighters. Ideal for promotional giveaways and everyday use."}
                         image={lighter}/>
            </div>

            <h2 id={"bottomText"}>and much more...</h2>


            <Footer/>

        </div>
    )
}

export default Products;