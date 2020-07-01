import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/Content';

function AboutPage(props){


    return(
        <div>
            <Hero title={props.title}></Hero>
            <Content>
               <p> Hi! My name is Munipalle Sai Chitanya and I find latest technological innovations facinating in all ways.</p> 
               <p>I developed a few augmented reality filters with the help of my teammate for Instagram.</p>
                <p>Deep Learning, Neural Networks, Artificial Intelligence have captivated me and have generated an interest in me to develop a project.</p>
                <p> I am also into Web Development and I recently started learning React(Which is AWESOME!! PS: This site was made using React ;) ).
                I do have some experience of working on php.</p>
               <p> So coming to my non-technical stuff, I am into content writing and stuff like public speaking. Most of my public speaking is done in Toastmasters.</p>

                </Content>
                <Content><h5>My positions of responsibility include:</h5> 
                <ol><li>Web Developer at CaPlan</li> 
                <li>President for Anurag Cloud Club</li> 
                <li>Technical Team Lead at GirlScript Hyderabad Chapter</li>
                <li>Secretary for Anurag Toastmasters</li>
                </ol>
                </Content>
                <Content>
                    Explore more about me @ <a href="https://www.linkedin.com/in/munipalle-sai-chaitanya-6b5725171/">LinkedIn!</a>
                </Content>

        </div>
    );
}
export default AboutPage;