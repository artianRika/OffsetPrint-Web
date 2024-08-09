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
import {useTranslation} from "react-i18next";


const Products = () => {
    const {t} = useTranslation()

    return(
        <div className={"products"}>
            <h2>Products</h2>

        <div className={"productsContainer"}>
            <Product title={t('products.books')}
                     textContent={t('products.bookDescription')}
                     image={book}/>

            <Product title={t('products.customNotebooks')}
                     textContent={t('products.notebookDescription')}
                     image={notebook}/>

            <Product title={t('products.businessCards')}
                     textContent={t('products.businessCardDescription')}
                     image={businessCard}/>

            <Product title={t('products.ncrPads')}
                     textContent={t('products.ncrPadsDescription')}
                     image={ncrPads}/>

            <Product title={t('products.promotionalFlyers')}
                     textContent={t('products.promotionalFlyersDescription')}
                     image={flyer}/>

            <Product title={t('products.brochures')}
                     textContent={t('products.brochuresDescription')}
                     image={brochures}/>

            <Product title={t('products.menus')}
                     textContent={t('products.menusDescription')}
                     image={menu}/>

            <Product title={t('products.customCalendars')}
                     textContent={t('products.customCalendarsDescription')}
                     image={calendar}/>

            <Product title={t('products.eventTickets')}
                     textContent={t('products.eventTicketsDescription')}
                     image={eventTicket}/>

            <Product title={t('products.hotFoilPrint')}
                     textContent={t('products.hotFoilPrintDescription')}
                     image={hotFoil}/>

            <Product title={t('products.banners')}
                     textContent={t('products.bannersDescription')}
                     image={banner}/>

            <Product title={t('products.stationery')}
                     textContent={t('products.stationeryDescription')}
                     image={envelopes}/>

            <Product title={t('products.tshirts')}
                     textContent={t('products.tshirtsDescription')}
                     image={tshirt}/>

            <Product title={t('products.pens')}
                     textContent={t('products.pensDescription')}
                     image={pen}/>

            <Product title={t('products.lighters')}
                     textContent={t('products.lightersDescription')}
                     image={lighter}/>

        </div>


            <h2 id={"bottomText"}>{t('products.muchMore')}</h2>


            <Footer/>

        </div>
    )
}

export default Products;