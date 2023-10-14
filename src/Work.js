import React from 'react';
import { Link } from 'react-router-dom';

const Work = ()=>{
    const projects = [
        {
          title: "Hackathons",
          description:
            "Achieved the 24-hour Hash Breaker's final rounds, demonstrating resiliency, and took part in SDGHACK23, working in a team to find a solution to one of the seventeen sustainable objectives.",
          link:""
        },
        {
            title: "Personalized Birthday Cards",
            description:
              "Created attractive and creative personalized birthday cards for friends. This project allowed me to experiment with design, helping me learn how to choose the right colors and elements for a visually appealing result.",
              link:""
             
            }, 
        {
          title: "Frontend Food Ordering Website",
          description:
            "Created a simple food ordering website using HTML and CSS. This project offers a user-friendly interface for customers to browse and order food items online.",
        
          link:"https://github.com/Ramya-Panditi/coffeeprinceweb"
        },
        {
          title: "Functioning Music Player",
          description:
            "Built a functioning music player using a front-end stack. This project allows users to play, pause, and control music tracks with a user-friendly interface.",
          link:"https://ramya-panditi.github.io/musicplayer/"
        },
        {
          title: "Games",
          description:
            "Developed games using vanilla JavaScript, including 'Whack-a-Mole' and a memory game. These games provide interactive and engaging user experiences.",
          link:"https://github.com/Ramya-Panditi/wack-a-mole"
        },
        {
          title: "Weather App",
          description:
            "Created a weather app that uses an API to provide real-time weather information. Users can input a location, and the app displays weather data and forecasts.",
          link:"https://github.com/Ramya-Panditi/weather-app"
        },
        {
          title: "Duo Studio Clone",
          description:
            "Cloned Duo Studio with advanced animations and learned about the GSAP library for creating rich and interactive web animations.",
          link:"https://ramya-panditi.github.io/duostudio/"
        },
        {
          title: "MERN Stack Internship by Ethnus",
          description:
            "Currently participating in a MERN stack internship program with Ethnus, gaining hands-on experience in full-stack web development using MongoDB, Express, React, and Node.js.",
          link:"https://github.com/Ramya-Panditi/MERN-INTERNSHIP"
        },
        {
          title: "AWS Cloud Practitioner Course",
          description:
            "Enrolled in an AWS Cloud Practitioner course to learn about cloud computing and AWS services, gaining knowledge and certification in cloud technologies.",
          link:""
        },
        {
          title: "Music Genre Classification using Deep Learning",
          description:
            "Conducted research and implemented a music genre classification system using deep learning Convolutional Neural Networks (CNN) under the guidance of my professor.",
          link:""
        },
        {
            title: "Research Paper",
            description:
              "Worked with my professor to write a research paper on 'Product Recommendation' that focused on the use of machine learning algorithms to provide product recommendations.",
            link :""
            }
      ];
      
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>RAMYA PANDITI/Projects</h4></Link> 
        <div className='container d-flex justify-content-center align-items-center flex-column'>
        {projects.map((a,i)=>{
             
             return <>
            <div key={i} className='prize-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-10 p-4 col-sm-10 justify-content-center align-items-center gap-3'>
                <h3 >
            <i className='fa-solid fa-lightbulb mx-2'>
            </i>
                    {a.title}</h3>
                <p>{a.description}</p>
                {a.link !== "" ? (
                <p><a href={a.link} target='_blank'>Link</a> </p>) : (<></>)}
            </div>

            </>
         })}
        </div>
        
        
        </>
    )
}
export default Work;
    
    
    
    
    
  