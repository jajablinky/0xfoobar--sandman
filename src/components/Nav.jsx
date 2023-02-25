import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'



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
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
