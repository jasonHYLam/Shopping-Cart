import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
    return (
        <>
        <h2>Welcome to the online site</h2>
        <div className={styles.container}>
            <h1 className={styles.insideImageText}>Lazy Bones</h1>
        </div>

        <Link to="/shop">
            <h2 className={styles.animation}>NEW ARRIVALS</h2>
        </Link>
        </>
    )

}

export default HomePage