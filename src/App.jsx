import { useState } from 'react'
import { Router } from 'react-router-dom'

import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'
import contractStacks from './images/Contract-Stacks.png'
import topologyPattern from './images/Topology-2.png'

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
                    <div className="trusted-by--wrapper"></div>
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
