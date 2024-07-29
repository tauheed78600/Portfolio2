import React from 'react'
import "../styles/Projects.css"
import Card from './Card';

function Projects() {
  const cards = [
    {
        title: 'An Expense Tracker website designed for managing and tracking expenses',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'This is a description of the first card.'
    },
    {
        title: 'A Telegram bot for scheduling daily/ monthly weather updates using OpenWeather API',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'This is a description of the second card.'
    },
    {
        title: 'Bus Reservation System for reserving and cancelling seats',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'This is a description of the third card.'
    }
];

return (
    <div className="app">
        <h1>Beautiful Cards</h1>
        <div className="card-container">
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
            ))}
        </div>
    </div>
);
}

export default Projects
