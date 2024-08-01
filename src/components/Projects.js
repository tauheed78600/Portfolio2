import React from 'react'
import "../styles/Projects.css"
import Card from './Card';

function Projects() {
  const cards = [
    {
        title: 'An Expense Tracker website designed for managing and tracking expenses',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'A System designed to track the daily expenses of a user. User will be able track its expenses, set monthly budget, visualize the expenses category wise or payment mode wise, get daily, monthly and weekly reports for the expenses. The backend of this system is developed using NestJS Framework and UI is designed using ReactJS.'
    },
    {
        title: 'A Telegram bot for scheduling daily/ monthly weather updates using OpenWeather API',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'A Telegram Bot for the users to get daily updates on the weather of their city once they subscribe to the bot. Users can subscribe and unsubscribe at any time. It is created using NestJS which is used to create server side applications. It also have an admin panel where the admin can block or delete the users from the bot.'
    },
    {
        title: 'Bus Reservation System for reserving and cancelling seats',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSbpWz8SUrRq7EZL-tE73XEN-oSUPFgA3KQ&s',
        description: 'A Web Application for Bus Reservation with a login page where users can create and login their account and reserve the seats, display the seats available and cancel the reservation. This Application follows MVC Software methodology. The UI for this web application is made using HTML and CSS.'
    }
];

return (
    <div className="app">
        <h1 className='projectHeading'>Here are some of the Projects which I have been recently worked on</h1>
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
