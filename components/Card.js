import React from 'react'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'

export default function Card(){
    return(
        <div className='Card'>
        <Header/>
           <Main/>
            <Footer/>
        </div>
    )
}