import { useParams } from "react-router-dom"
import { useState } from "react";
import { Link } from "react-router-dom";
import { getDataFromId } from "../utils";
import { useEffect } from "react";
import QuantityController from "./QuantityController";
import leftArrow from "../assets/chevron-left.svg";

import styles from "./ItemPage.module.css"

const ItemPage = ({addedItems, setAddedItems}) => {

    const [quantity, setQuantity] = useState(1)
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const [addedAlready, setAddedAlready] = useState(false);

    useEffect(() => {
        if (checkIfAddedAlready()) setAddedAlready(true)
    }, [addedAlready])


    const {id} = useParams();

    console.log(addedItems)

    function checkIfAddedAlready() {
        return (addedItems.some(item => item.id === id))
    }

    function checkIfQuantityDiffers() {
        const sameItem = addedItems.find(item => item.id === id);
        return sameItem.quantity !== quantity
    }

    function returnModifiedArray() {
        const array = addedItems.map(item => {
            return item.id === id ? {...item, quantity: quantity} : item
        })
        console.log(array)
        return array
    }


    useEffect(()=> {
        getDataFromId(id).then(({title, imageUrl, price, category}) => {
            setTitle(title);
            setImageUrl(imageUrl);
            setPrice(price);
            setCategory(category);
        }) 
    })

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img className={styles.img} src={imageUrl} alt="" />
                </div>


                <div className={styles.right}>
                    <p className={styles.closeText}>LAZY BONES</p>
                    <p className={styles.closeText}>{category.toUpperCase()}</p>
                    <h2>{title.toUpperCase()}</h2>
                    <p>£{price}</p>
                    <QuantityController quantity={quantity} setQuantity={setQuantity}/>

                    <button 
                    className={styles.addCartButton}

                    onClick={() => {
                        if (checkIfAddedAlready()) {

                            if (checkIfQuantityDiffers()) {setAddedItems(returnModifiedArray())}
                            return
                        }


                        else {
                            setAddedAlready(true);
                            setAddedItems(
                                [...addedItems, 
                                {
                                    id: id, 
                                    title: title, 
                                    imageUrl: imageUrl,
                                    price: price,
                                    quantity: quantity,
                                }
                            ])
                        }
                    }
                    }
                    >
                        ADD TO CART
                    </button>

                    <Link to="/shop" className={styles.verticalCenter}>
                        <img className={styles.arrowIcon} src={leftArrow} alt="" />
                        CONTINUE SHOPPING
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemPage