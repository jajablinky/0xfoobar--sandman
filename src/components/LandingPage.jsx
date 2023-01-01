import React, { useState } from 'react'
/* Image Import */
import contractStacks from '../images/Contract-Stacks.png'
import alchemix from '../images/client-logos/Alchemix.png'
import alpacadabraz from '../images/client-logos/alpacadabraz.png'
import delegateCash from '../images/client-logos/Delegate-cash.png'
import fooFighters from '../images/client-logos/Foofighters.png'
import oSnipeGenesis from '../images/client-logos/oSnipeGenesis.png'
import partyBid from '../images/client-logos/Partybid_logo.png'
import pixelLab from '../images/client-logos/Pixellab.png'
import substack from '../images/client-logos/Substack.png'
import sushiSwap from '../images/client-logos/sushiSwap.png'
import tallyLogo from '../images/client-logos/TallyLogo 1.png'
import leftArrow from '../images/arrow-left.png'
import rightArrow from '../images/arrow-right.png'

const LandingPage = () => {
    const [logos, setLogos] = useState([
        alchemix,
        alpacadabraz,
        delegateCash,
        fooFighters,
        oSnipeGenesis,
        partyBid,
        pixelLab,
        substack,
        sushiSwap,
        tallyLogo,
    ])

    const shuffleLogos = () => {
        const shuffledLogos = [...logos]
        const logoImgs = document.querySelectorAll('.logo-img')

        // Remove the slide-in class from all logoImgs
        logoImgs.forEach((img) => img.classList.remove('slide-in'))

        // Add the swipe class to all logoImgs
        logoImgs.forEach((img) => img.classList.add('swipe'))

        for (let i = shuffledLogos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffledLogos[i], shuffledLogos[j]] = [
                shuffledLogos[j],
                shuffledLogos[i],
            ]
        }

        setLogos(shuffledLogos)

        // Wait 1ms before adding the slide-in class back to all logoImgs
        setTimeout(() => {
            logoImgs.forEach((img) => img.classList.add('slide-in'))
            logoImgs.forEach((img) => img.classList.remove('swipe'))
        }, 1)
    }

    const createLogo = (name, index) => {
        return <img src={name} alt={name} key={index} className="logo-img" />
    }

    return (
        <>
            <section className="landing-page--full-container">
                <div className="landing-page--main-container">
                    <div className="landing-page--main-content">
                        <div className="landing-page--left">
                            <h1 className="landing-page--left-save-your">
                                Save Your
                            </h1>
                            <h1 className="landing-page--left-smart-contracts">
                                Smart Contracts
                            </h1>
                            <span className="landing-page--left-secondary">
                                EVM smart contract audits on NFT and Defi.
                                Saving you millions of dollars.
                            </span>
                            <button className="landing-page--lets-talk-button">
                                Lets Talk
                            </button>
                        </div>
                        <div className="landing-page--right">
                            <img src={contractStacks} alt="contract-stacks" />
                        </div>
                    </div>
                </div>
                <div className="landing-page--secondary-container">
                    <div className="arrow" onClick={shuffleLogos}>
                        <img src={leftArrow} alt="left-arrow" />
                    </div>
                    <div className="trusted-by--wrapper">
                        <div className="trusted-by--container">
                            <div className="trusted-by--header">
                                <h3>Trusted By:</h3>
                            </div>
                            <div className="trusted-by--logo-grid">
                                {logos.map((img) => createLogo(img))}
                            </div>
                        </div>
                    </div>
                    <div className="arrow" onClick={shuffleLogos}>
                        <img src={rightArrow} alt="right-arrow" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
