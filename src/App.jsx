import { useState } from 'react'
import { Router } from 'react-router-dom'

import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'

function App() {
    return (
        <div className="full--container">
            <div className="content--container">
                <main>
                    <Nav />
                    <section className="landing-page--container">
                        <div></div>
                    </section>
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
