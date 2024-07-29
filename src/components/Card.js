// Card.js
import React from 'react';
import '../styles/Card.css';

function Card({ title, description }) {
    return (
        <div class="card">
   <a class="card1" href="#">
    <p>{title}</p>
    <p class="small">{description}</p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
</div>
);
}

export default Card;
