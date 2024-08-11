// Card.js
import React from 'react';
import "../styles/Card.css";

function Card({ title, image, description, githubLink }) {

    const handleClick = () => {
        window.open(githubLink, '_blank', 'noopener noreferrer');
    };

    return (
        <div className="col-sm-12 col-md-6 g-5   cardDiv">
            <img src={image} alt={title} className="card-image " />
            <div className="card-content cards">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className='btn' onClick={handleClick}>GitHub</button>
            </div>
            
        </div>
    );
}

export default Card;
