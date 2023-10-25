import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import logo from "../assets/heart-broken.svg"


const Layout = ({shopListLength}) => {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="" />
                </Link>
                <NavBar shopListLength={shopListLength}/>
            </header>

            <div className={styles.content}>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout