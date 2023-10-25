import { useEffect, useState } from "react"
import cardStyle from "./Card.module.css";
import { Link } from "react-router-dom";
import { getDataFromId } from "../utils";

const Card = ({shopId}) => {

    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getDataFromId(shopId).then(({title, imageUrl, price}) => {
            setTitle(title);
            setImageUrl(imageUrl);
            setPrice(price);
        }) 
    })

    return (
        <>
        <Link to={`/shop/${shopId}`} >
        <div 
        className={cardStyle.card}
        >
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <p className={cardStyle.title}>{title.toUpperCase()}</p>
                <p>£{price}</p>
            </div>
        </div>

        </Link>
        </>
    )
}

export default Card