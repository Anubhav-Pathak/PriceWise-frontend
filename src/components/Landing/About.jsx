import React from 'react';

function About() {
    return (
        <div>
        <h1 className='text-7xl py-10' >About</h1>
    <p className = 'text-3xl mx-9 justify-center hover:text-yellow-200'>PriceWise is a web application that enables users to estimate the cost and insurance value of their vehicle based on its current damage. The application utilizes a DL model to determine the level of damage and calculate the current price and insurance worth of the car. To ensure security and transparency, unique policy numbers will be generated using blockchain technology and smart contracts, which will be validated within the system. </p>
    </div>
    ) 
}
export default About;