import React from 'react';
import "./styles.css"

const Button = (props,icon) => {
    return (
        <a>
            <button className='button'>
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