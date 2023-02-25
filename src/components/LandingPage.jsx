import React, { useEffect } from 'react'

import moon from '../images/moon.svg'
import twitterIcon from '../images/twittericon.svg'
import foostudio from '../images/foostudio_logo.png'

import Stars from './Stars'

const LandingPage = () => {
const quote1 = "Think of us as the sandman "
const quote2 = "you can sleep at night -- tucked in"
const quote3 = "as your project is secured."

useEffect(() => {
    Stars()
}, [])

    return (
        <>
            <section className="landing-page--full-container" >
                <div className='landing-page--content fade-in'>
                        <h1>Smart Contract audits for</h1>
                        <h1>NFTs and DeFi, by foobar </h1>
                        <p>{quote1}{quote2}</p>
                        <p>{quote3}</p>
                </div>
                <div className='button-container fade-in'>
                <button className='button-outline'>Contact</button>
                <button className='button-filled'><img src={twitterIcon} alt='twitter-svg'/></button>
                </div>
            </section>
        </>
    )
}

export default LandingPage
