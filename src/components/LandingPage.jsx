import React, { useState } from 'react'

import foostudio from '../images/foostudio_logo.png'

const LandingPage = () => {


    return (
        <>
            <section className="landing-page--full-container">
                <div className='landing-page--content'>
                        <img
                            className={'foostudio'}
                            src={foostudio}
                            alt={'foostudios'}
                        />
                        <p>Think of us as the sandman - you can sleep at night tucked in as your project is secured</p>
                </div>
            </section>
        </>
    )
}

export default LandingPage
