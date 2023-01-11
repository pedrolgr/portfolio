import React from 'react';
import "./styles.css"

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>Pedro Rocha</div>
            <ul className='nav-links'>

                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contato</a></li>

            </ul>

        </ nav>
    )
}

export default Navbar;
