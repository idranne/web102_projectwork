//basic layout with all components aligned
import "./Card.css"

//parameters with title, description and image 
function Card({title, description, image}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <img src={image} alt={title} className="card-image" />         
        </div>

    )
}
export default Card