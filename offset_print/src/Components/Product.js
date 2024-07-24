import "./Product.css"

const Product = (props) =>{
    return(
        <div className={"product"}>
            <div className={"productContainer"}>
                <img height={90} className={"productImage"} src={props.image}/>
                <h2 id={"productTitle"}>{props.title}</h2>
            </div>
                <div className={"productDescription"} dangerouslySetInnerHTML={{__html: props.textContent}}/>
        </div>
    )
}

export default Product;