import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import cartImage from "../assets/cart-outline.svg"
import styles from "./Navbar.module.css"

const NavBar = ({shopListLength}) => {

    const [cartNotEmpty, setCartNotEmpty] = useState(false)

    useEffect(() => {
        shopListLength > 0 ? setCartNotEmpty(true) : setCartNotEmpty(false);
    }, [shopListLength])

    return (
        <>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/checkout">

                    <div className={styles.checkoutContainer }>
                        <img className={styles.cartImage} src={cartImage} alt="" />
                        {(cartNotEmpty) ? shopListLength : ''}
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default NavBar;