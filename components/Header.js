import React from 'react';
import Buttons from './subcomponents/Buttons'

export default function Header(){
    return(
        <header>
        <img src="https://media-exp2.licdn.com/dms/image/C4D03AQGYyi2L09mF8A/profile-displayphoto-shrink_800_800/0/1588267546659?e=1663804800&v=beta&t=37jME2G28A01oXEgLL9jbROUo-5Sn8QaZLP2C3GsXzw" alt="test"/>
        <h1 className='name--title'>Pierre Konyk</h1>
        <h2 className ='name--job'>Frontend Developer</h2>
        <a className='website--header' href='#'>Pierre's Website soon</a>
        <Buttons/>
        </header>
    )
}