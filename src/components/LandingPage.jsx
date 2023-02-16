import React, { useEffect } from 'react'

import foostudio from '../images/foostudio_logo.png'
import Stars from './Stars'

const LandingPage = () => {
const quote = "Think of us as the sandman - you can sleep at night tucked in as your project is secured"

useEffect(() => {
    Stars()
}, [])

    return (
        <>
            <section className="landing-page--full-container">
                <div className='landing-page--content fade-in'>
                        <img
                            className={'foostudio'}
                            src={foostudio}
                            alt={'foostudios'}
                        />
                        <p>{quote}</p>
                </div>
            </section>
        </>
    )
}

export default LandingPage
