import React, { useEffect } from 'react'

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
                        <img
                            className={'foostudio'}
                            src={foostudio}
                            alt={'foostudios'}
                        />
                        <p>{quote1}{quote2}</p>
                        <p>{quote3}</p>
                </div>
                <div className='button-container fade-in'>
                <button className='button-outline'>contact</button>
                </div>
            </section>
        </>
    )
}

export default LandingPage
