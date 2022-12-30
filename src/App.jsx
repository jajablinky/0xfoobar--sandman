import { useState } from 'react'
import { Router } from 'react-router-dom'

/* Styles and components import */
import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import InfoPage from './components/InfoPage'

function App() {
    return (
        <div className="full--container">
            <div className="content--container">
                <main>
                    <Nav />
                    <LandingPage />
                    <div className="ticker">
                        <p>{`<- - - - - - - -`}</p>
                    </div>
                    <div className="ticker-2">
                        <p>{`- - - - - - - ->`}</p>
                    </div>
                    <InfoPage />
                    <div className="ticker-2">
                        <p>{`~ ~ ~ ~ ~ ~ ~ ~`}</p>
                    </div>
                    <div className="ticker">
                        <p>{`~ ~ ~ ~ ~ ~ ~ ~`}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
