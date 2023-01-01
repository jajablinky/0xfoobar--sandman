/* Styles and components import */
import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import InfoPage from './components/InfoPage'
import Audits from './components/Audits'
import Footer from './components/Footer'

function App() {
    return (
        <div className="full--container">
            <Nav />
            <main>
                <LandingPage />
                <div className="ticker--container">
                    <div className="ticker"></div>
                </div>

                <InfoPage />
                <div className="ticker--container">
                    <div className="ticker"></div>
                </div>
                <Audits />
            </main>
            <Footer />
        </div>
    )
}

export default App
