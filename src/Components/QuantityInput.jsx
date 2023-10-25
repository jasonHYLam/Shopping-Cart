import styles from "./QuantityController.module.css"

const QuantityInput = ({quantity, setQuantity}) => {

    return (
        <input className={styles.input}
        type="number" 
        max="10"
        value={quantity}
        onChange={(e) => {setQuantity(e.target.value)}}
        />
    )
}

export default QuantityInput