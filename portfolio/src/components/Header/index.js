import React from 'react';
import "./styles.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Avatar from '../../img';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                { /* div do texto */ }
                <div className='header-text'>
                    <h1>Olá, eu sou Pedro</h1>
                    <h3>Desenvolvedor Front-end, futuro 
                        desenvolvedor full-stack ;)</h3>

                    <p>Apaixonado por tecnologia desde criança, decidi 
                        começar minha carreira no mundo da programação e 
                        pretendo me tornar um desenvolvedor full-stack.</p>

                    
                    <a href='https://www.linkedin.com/in/pedrolgr/'>
                        <button>
                            <FaLinkedin className='icon'/> LinkedIn
                        </button>
                    </a>

                    
                    <a href='https://github.com/pedrolgr'>
                        <button>
                            <FaGithub className='icon'/> GitHub
                        </button>
                    </a>
                    
                </div>

                { /* div da imagem */ }
                <div className='header-img'>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;
