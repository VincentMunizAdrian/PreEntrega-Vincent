import styles from "./navbar.module.scss"

const Navbar = ({icono}) => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.ulNav}>
                <div className={styles.listaNav}>
                    <a className={styles.estiloListado} href=""><li>Inicio</li></a>
                    <a className={styles.estiloListado} href=""><li>Quienes somos</li></a>
                    <a className={styles.estiloListado} href=""><li>Contacto</li></a>
                </div>

                <div className={styles.divCarrito}>
                    <img src={icono} alt="Carrito de compras" className={styles.iconoCarrito}/>
                    <p className={styles.cantidadCarrito}>7</p>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;