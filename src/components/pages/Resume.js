import React from 'react';
import resume from '../../files/Resume.jpg';
import pdf from '../../files/Resume.pdf';


function Resume() {
    return (
        <div className='resume'>
            <h2>
                <a href={pdf}>Click here for PDF version</a>
            </h2>
            <img src={resume}/>
            
        </div>
    )
}

export default Resume
