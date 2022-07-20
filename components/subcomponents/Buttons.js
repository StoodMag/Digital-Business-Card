import React from 'react';

export default function Button(){
    return(
        <div className ='Buttons'>
            <button className='email--btn'>
            <i className="fa fa-envelope"></i>Email
            </button>  
            <button className='linkedin--btn'>
            <i className="fa fa-linkedin-square"></i>
            LinkedIn
            </button>
        </div>
    )
}