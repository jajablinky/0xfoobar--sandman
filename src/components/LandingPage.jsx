import React, { useState } from 'react'

import foostudio from '../images/foostudio_logo.png'

const LandingPage = () => {
const quote = "Think of us as the sandman - you can sleep at night tucked in as your project is secured"


    return (
        <>
            <section className="landing-page--full-container">
                <div className='landing-page--content'>
                        <img
                            className={'foostudio'}
                            src={foostudio}
                            alt={'foostudios'}
                        />
                        <p className='quote'>{quote}</p>
                </div>
            </section>
        </>
    )
}

export default LandingPage
