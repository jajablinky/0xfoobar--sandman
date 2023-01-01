import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import foobar from '../images/foobar.png'

const Nav = () => {
    return (
        <header className="header--container" id="home">
            <div className="header--sub-container">
                <div className="header--content-container">
                    <div className="header--content-left">
                        <img
                            className={'foobar'}
                            src={foobar}
                            alt={'foobar_transparent'}
                        />
                        <h2>Foobar</h2>
                    </div>
                    <nav>
                        <HashLink smooth to="/#audits" className="menu-item">
                            Audits
                        </HashLink>
                        <Link>
                            <button className="contact--button">Contact</button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
