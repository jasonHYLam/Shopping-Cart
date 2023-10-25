import styles from "./CheckoutPage.module.css";
import { Link } from "react-router-dom";
import leftArrow from "../assets/chevron-left.svg";

const CheckoutPage = ({addedItems}) => {
    console.log(addedItems)

    function calculateTotalPrice() {
        return addedItems.map(item => item.price * item.quantity)
        .reduce((sum, currentItem) => sum + currentItem, 0)
    }

    const totalPrice = calculateTotalPrice();

    return (
        <>
        <div className={styles.page}>
            <h1>MY CART</h1>

            {addedItems.length > 0 
        
            ? 
        
            <div className={styles.container}> 

            {addedItems.map(item => {
                return (
                <div key={item.id} className={styles.checkOutItem}>
                    <div>
                        <img className={styles.img} src={item.imageUrl} alt="" />
                    </div>
                    <div>
                        <p>{item.title.toUpperCase()}</p>
                        <p>£{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                    <p className={styles.priceEnd}>£{item.quantity * item.price}</p>
                </div>
                )
            })}

            <div>
                <div className={styles.aboveCheckoutButton}>

                    <div className={styles.splitTextContainer}>
                        <p>Subtotal</p>
                        <p>£{totalPrice}</p>
                    </div>
                    <div className={styles.splitTextContainer}>
                        <p>Tax</p>
                        <p>Tax included</p>
                    </div>
                    <div className={styles.splitTextContainer}>
                        <p>Shipping</p>
                        <p>Calculated at checkout</p>
                    </div>

                </div>

                <div className={styles.splitTextContainer}>
                    <p>Total</p>
                    <p>£{totalPrice}</p>
                </div>
                <button className={styles.button}>Check Out</button>

            </div>


            </div>
        
            : 
        
            <div>
                <p>Cart is empty</p>
                <Link to="/shop" className={styles.continueShopping}>
                    <img className={styles.leftArrow} src={leftArrow} alt="" />
                    CONTINUE SHOPPING
                </Link>

            </div>
            
            }

        </div>



        </>
    )
}

export default CheckoutPage;