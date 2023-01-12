import React from 'react';
import "./styles.css"
const Skills = () => {
    return (
        <div className='content'>
            <div className='container'>
                <h1 className='text'>Skills</h1>
                <h3 className='text'>Todas minhas habilidades com os níveis de conhecimento.</h3>

                <div className='skill'>
                    <li>
                        <h3>HTML</h3>
                        <span className='bar'> <span className='html'></span> </span>
                    </li>
                    <li>
                        <h3>CSS</h3>
                        <span className='bar'> <span className='css'></span> </span>
                    </li>
                    <li>
                        <h3>JavaScript</h3>
                        <span className='bar'> <span className='javascript'></span> </span>
                    </li>
                    <li>
                        <h3>React</h3>
                        <span className='bar'> <span className='react'></span> </span>
                    </li>

                </div>
            </div>
        </div>
    )
}

export default Skills;
