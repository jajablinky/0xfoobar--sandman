import { useState } from 'react'
import { Router } from 'react-router-dom'

/* Styles and components import*/
import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'

/*Image Import*/
import contractStacks from './images/Contract-Stacks.png'
import alchemix from './images/client-logos/Alchemix.png'
import alpacadabraz from './images/client-logos/alpacadabraz.png'
import delegateCash from './images/client-logos/Delegate-cash.png'
import fooFighters from './images/client-logos/Foofighters.png'
import oSnipeGenesis from './images/client-logos/oSnipeGenesis.png'
import partyBid from './images/client-logos/Partybid_logo.png'
import pixelLab from './images/client-logos/Pixellab.png'
import substack from './images/client-logos/Substack.png'
import sushiSwap from './images/client-logos/sushiSwap.png'
import tallyLogo from './images/client-logos/TallyLogo 1.png'

function App() {
    return (
        <div className="full--container">
            <div className="content--container">
                <main>
                    <Nav />
                    <section className="landing-page--main-container">
                        <div className="landing-page--left">
                            <h1 className="landing-page--left-save-your">
                                save your
                            </h1>
                            <h1 className="landing-page--left-smart-contracts">
                                smart contracts
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
                    </section>
                    <div className="trusted-by--wrapper">
                        <div className="trusted-by--header">
                            <h3>Trusted By:</h3>
                        </div>
                        <div className="trusted-by--logo-grid">
                            <img src={alchemix} alt="contract-stacks" />
                            <img src={alpacadabraz} alt="contract-stacks" />
                            <img src={delegateCash} alt="contract-stacks" />
                            <img src={sushiSwap} alt="contract-stacks" />
                            <img src={fooFighters} alt="contract-stacks" />
                            <img src={oSnipeGenesis} alt="contract-stacks" />
                            <img src={substack} alt="contract-stacks" />
                            <img src={tallyLogo} alt="contract-stacks" />
                            <img src={partyBid} alt="contract-stacks" />
                            <img src={pixelLab} alt="contract-stacks" />
                        </div>
                    </div>
                </main>
            </div>
            {/* <main>
        <section></section>
        <section></section>
      </main> */}
        </div>
    )
}

export default App
