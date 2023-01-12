import React from 'react';
import "./styles.css"

const Button = (props) => {
    return (
        <a>
            <button className='button'>
                {props.icon}
                {props.name}
            </button>
        </a>
        
    )
}

export default Button;


/*<a href='https://github.com/pedrolgr'>
                        <button>
                            <FaGithub className='icon'/> GitHub
                        </button>
                    </a>*/