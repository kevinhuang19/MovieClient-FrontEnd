import React from 'react';
import './imageContainer.css';

function ImageContain(props) {
    return (
        <>
            <div className='image-container'>
                <img src={props.src}></img>
                <p className='overlay-text'>{props.description}</p>
            </div>
        </>
    );
  }
  
  export default ImageContain;