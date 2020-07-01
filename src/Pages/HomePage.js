import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel'; 

function HomePage(props){


    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Carousel></Carousel>
        </div>
    
    );
}
export default HomePage;