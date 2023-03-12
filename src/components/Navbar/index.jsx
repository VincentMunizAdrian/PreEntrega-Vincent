import styles from "./navbar.module.scss"

const Navbar = ({icono}) => {
    return (
        <nav className={styles.navBar_style}>
            <ul className={styles.ul_style}>
                <li>Inicio</li>
                <li>Quienes somos</li>
                <li>Contacto</li>
                <div className={styles.divCarrito}>
                <img src={icono} alt="Carrito de compras" className={styles.iconoCarrito}/>
                <p className={styles.cantidadCarrito}>7</p>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;