// Card.js
import React from 'react';
import "../styles/Card.css";

function Card({ title, image, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <button>Github</button>
        </div>
    );
}

export default Card;
