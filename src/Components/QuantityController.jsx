import QuantityInput from "./QuantityInput"
import styles from "./QuantityController.module.css"

const QuantityController = ({quantity, setQuantity}) => {
    return (
        <>
        <div className={styles.inputContainer}>
            <button className={styles.button} onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1)}
                }>-</button>
            <QuantityInput 
            quantity={quantity}
            setQuantity={setQuantity}
            />
            <button 
            className={styles.button} 
            onClick={() => {
                if (quantity === '') setQuantity(1)
                else setQuantity(parseInt(quantity) + 1)
                }}>+</button>

        </div>
        </>

    )
}

export default QuantityController