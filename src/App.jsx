/* Styles and components import */
import './styles/index.css'
import './styles/App.css'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import BlurBottom from './components/BlurBottom'

function App() {

    return (
        <div className="full--container" >
            <main>
                <LandingPage />
            </main>
        </div>
    )
}

export default App
