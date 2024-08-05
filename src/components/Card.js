// Card.js
import React from 'react';
import '../styles/Card.css';

function Card({ title, description }) {
    return (
        <div className="card">
        <a className="card1">
          <p>{title}</p>
          <p className="small">{description}</p>
          <div className="go-corner">
            <div className="go-arrow">
              →
            </div>
          </div>
          <button className='github12'>Github</button>
        </a>
      </div>
);
}

export default Card;
