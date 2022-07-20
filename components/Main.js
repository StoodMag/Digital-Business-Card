import React from 'react';
import About from './subcomponents/About'
import Interests from './subcomponents/Interests'

export default function Main(){
    return(
        <main className='Main'>
        <About/>
        <Interests/>
        </main>
    )
}