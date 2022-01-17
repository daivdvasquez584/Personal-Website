import React from 'react';
import photo from '../../files/website_david.jpeg';

function AboutMe() {
    return (
        <div className='about-me'>
            <img src={photo}/>
            <br></br>
            <br></br>
            <p>
                I was born and raised in Houston, TX.
                Currently, I am a senior student attending Texas A&M University.
                I am majoring in applied mathematics with an emphasis in computer science.
                I also have two minors in computer science and cybersecurity. 
                I am seeking to start a career in software development.
            </p>
            
        </div>
    )
}

export default AboutMe
