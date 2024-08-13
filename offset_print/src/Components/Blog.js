import "./Blog.css"

const Blog = (props) =>{


    return(
        <div>
            <div className="blog">
                {props.hasImage ? (
                        <div className={"blogImageContainer "}>
                            <h2 id={"blogTitle"}>{props.title}</h2>
                            <div className={"blogTextContent"} dangerouslySetInnerHTML={{__html: props.textContent}}/>
                            <img className={"blogImage"} src={props.image}/>
                        </div>
                    )
                    : (
                        <>
                            <h2 id={"blogTitle"}>{props.title}</h2>
                             <div className={"blogTextContent"} dangerouslySetInnerHTML={{__html: props.textContent}}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Blog;
