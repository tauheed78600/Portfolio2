import React from 'react'
import "../styles/Projects.css"
import Card from './Card';

function Projects() {
    const cards = [
        {
            title: 'An Expense Tracker website designed for managing and tracking expenses',
            image: 'https://as2.ftcdn.net/v2/jpg/04/89/50/53/1000_F_489505318_jFQycyt76uwVJqCja2Eb33UA7vo7YEAQ.jpg',
            description: 'A System designed to track the daily expenses of a user. User will be able track its expenses, set monthly budget, visualize the expenses category wise, get daily, monthly and weekly reports for the expenses. The backend of this system is developed using NestJS Framework and UI is designed using ReactJS.',
            githubLink: 'https://github.com/tauheed78600/Expense-Tracker-Backend'
        },
        {
            title: 'A Telegram bot for scheduling daily/ monthly weather updates using OpenWeather API',
            image: 'https://as2.ftcdn.net/v2/jpg/04/89/50/53/1000_F_489505318_jFQycyt76uwVJqCja2Eb33UA7vo7YEAQ.jpg',
            description: 'A Telegram Bot for the users to get daily updates on the weather of their city once they subscribe to the bot. Users can subscribe and unsubscribe at any time. It is created using NestJS which is used to create server side applications. It also have an admin panel where the admin can block or delete the users from the bot.',
            githubLink: 'https://github.com/tauheed78600/A-Telegram-bot-for-Weather-Updates-using-NestJS/tree/master'
        
        },
        {
            title: 'Bus Reservation System for reserving and cancelling seats',
            image: 'https://as2.ftcdn.net/v2/jpg/04/89/50/53/1000_F_489505318_jFQycyt76uwVJqCja2Eb33UA7vo7YEAQ.jpg',
            description: 'A Web Application for Bus Reservation with a login page where users can create and login their account and reserve the seats, display the seats available and cancel the reservation. This Application backend is made in Spring boot and it follows MVC Software methodology. The UI for this web application is made using ReactJS.',
            githubLink: 'https://github.com/tauheed78600'
        },
        {
            title: 'A Chatbot using MERN-Stack and OPENAI',
            image: 'https://as2.ftcdn.net/v2/jpg/04/89/50/53/1000_F_489505318_jFQycyt76uwVJqCja2Eb33UA7vo7YEAQ.jpg',
            description: 'This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI. Its a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted. Its a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.',
            githubLink: 'https://github.com/tauheed78600/AI-Chatbot-using-MERN-back-end'
        }
    ];

    return (
        <div className="app">
            <h1 className='projectHeading'>Here are some of the Projects which I have been recently worked on</h1>
            <div className="container-fluid p-5">
                <div className='row'>
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
        </div>
    );
}

export default Projects
