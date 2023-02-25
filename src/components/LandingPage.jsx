import React, { useEffect } from 'react'

import moon from '../images/Moon.png'
import twitterIcon from '../images/twittericon.svg'
import foostudio from '../images/Foostudio.svg'
import rightSideLogosA from '../images/right-side-logos.svg'
import rightSideLogosB from '../images/right-side-logos-b.png'
import leftSideLogosA from '../images/left-side-logos-a.png'
import leftSideLogosB from '../images/left-side-logos-b.svg'
import star from '../images/contact-star.svg'

import Stars from './Stars'

const LandingPage = () => {
    const quote1 = 'Think of us as the sandman '
    const quote2 = 'you can sleep at night -- tucked in'
    const quote3 = 'as your project is secured.'

    useEffect(() => {
        Stars()
    }, [])

    return (
        <>
            <div className="header">
                <img
                    className="foo-studio"
                    src={foostudio}
                    alt="foobar-studio"
                />
                <img className="moon-blur" src={moon} alt="moon blur" />
            </div>
            <section className="landing-page--full-container">
                <div className="landing-page--content fade-in">
                    <h1>Smart Contract audits for</h1>
                    <h1>NFTs and DeFi, by foobar </h1>
                    <p>
                        {quote1}
                        {quote2}
                    </p>
                    <p>{quote3}</p>
                    <div className="floating-logos">
                        <div className="left-side-logos-a">
                            <img src={leftSideLogosA} alt="left-side-logos-a" />
                        </div>
                        <div className="left-side-logos-b">
                            <img src={leftSideLogosB} alt="left-side-logos-b" />
                        </div>

                        <div className="right-side-logos-a">
                            <img
                                src={rightSideLogosA}
                                alt="right-side-logos-a"
                            />
                        </div>
                        <div className="right-side-logos-b">
                            <img
                                src={rightSideLogosB}
                                alt="right-side-logos-b"
                            />
                        </div>
                    </div>
                    <div className="button-container fade-in">
                        <img
                            className="contact-star star"
                            src={star}
                            alt="star"
                        />
                        <img className="star1 star" src={star} alt="star1" />
                        <button className="button-outline">Contact</button>
                        <button className="button-filled">
                            <img src={twitterIcon} alt="twitter-svg" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
