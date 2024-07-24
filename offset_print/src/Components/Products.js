import Footer from "./Footer";
import Product from "./Product";
import "./Products.css"
import book from "../book.jpg"
import notebook from "../notebook.jpg"
import eventTicket from "../eventTicket.jpg"
import flyer from "../flyer.jpg"
import calendar from "../calendar.jpg"
import menu from "../menu.jpg"

const Products = () => {
    return(
        <div className={"products"}>
            <h2>Products</h2>

            <div className={"productsContainer"}>
                <Product title={"Books"} textContent={"Professionally printed books with crisp text and vibrant images. Available in various sizes and binding options, ideal for authors, publishers, and businesses."} image={book}/>
                <Product title={"Custom Notebooks"} textContent={"Our Customizable Notebooks are ideal for capturing ideas, taking notes, and planning projects. Personalise your unique and functional promotional item!"} image={notebook}/>
                <Product title={"Business Cards"} textContent={"Elevate your professional presence with Premium Business Cards. Perfect for networking events, client meetings, and everyday business interactions."} image={book}/>
                <Product title={"Promotional Flyers"} textContent={"Promotional Flyers as an effective marketing tool, with customizable templates to meet your needs."} image={flyer}/>
                <Product title={"Brochures"} textContent={"Deliver your message with clarity and style using our Professional Brochures. Ideal for marketing campaigns, product information, and corporate profiles."} image={book}/>
                <Product title={"Custom Calendars"} textContent={"Keep your brand in front of clients all year long with a Personalized Calendar. Available in wall, desk, and pocket formats."} image={calendar}/>
                <Product title={"Event Tickets"} textContent={"Durable and customizable event tickets with security features. Ideal for concerts, festivals, and shows."} image={eventTicket}/>
                <Product title={"Banners"} textContent={"Weather-resistant banners for indoor and outdoor use. Custom sizes and high-resolution printing."} image={book}/>
                <Product title={"Posters"} textContent={"High-quality posters with vivid colors, perfect for promotions and events. Custom sizes and finishes available."} image={book}/>
                <Product title={"Menus"} textContent={"High-quality, customizable menus for restaurants, cafes, and bars. Available in various formats and finishes."} image={menu}/>
                <Product title={"Stationery"} textContent={"Elegant stationery sets including letterheads, envelopes, and notepads. Perfect for corporate branding."} image={book}/>
            </div>

            <Footer/>

        </div>
    )
}

export default Products;