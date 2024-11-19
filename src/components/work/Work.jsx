import React from 'react'
import './work.css'

function Work({ image, title, subTitle, text, link }) {
    return (
        <a href={link} target="_blank" className='work-grid' rel="noopener noreferrer">
            <div className='work-grid-image'>
                <img src={image} alt='image' />
            </div>
            <div className='work-grid-body'>
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
                <p>{text}</p>
                {link && <span className='link-text'></span>}
            </div>
        </a >


    )
}

export default Work
