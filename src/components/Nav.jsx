import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import foobar from '../images/foobar.png'

const Nav = () => {
    const headerRef = useRef(null)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 30) {
                setOpacity(0)
            } else {
                setOpacity(1)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            ref={headerRef}
            className="header--container"
            id="home"
            style={{
                opacity,
                transition: '600ms opacity',
            }}
        >
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
                        <HashLink smooth to="/#info" className="menu-item">
                            Info
                        </HashLink>
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
