import "./navbar.css"

const Navbar = ({ toggleMenu }) => {
    return (
        <div>
            <header>
                <a href="/" className="logo">PortFolio</a>
                <div className="toggle" onClick={toggleMenu}></div>
                <ul className="menu">
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#work" onClick={toggleMenu}>Work</a></li>
                    <li><a href="#testimonial" onClick={toggleMenu}>Testimonial</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </header>
        </div>
    );
};

export default Navbar;