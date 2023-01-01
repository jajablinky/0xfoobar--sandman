import React from 'react'
import { HashLink } from 'react-router-hash-link'

import foobar from '../images/foobar.png'

const Footer = () => {
    const footerNavLinks = [
        { name: 'Home', hashlink: '/#home' },
        { name: 'Info', hashlink: '/#info' },
        { name: 'Audits', hashlink: '/#audits' },
        {
            name: 'Blog - (Substack) - The Variable',
            link: 'https://0xfoobar.substack.com/',
        },
    ]

    const socialNavLinks = [
        { name: 'Twitter', link: 'http://twitter.com/0xfoobar' },
        { name: 'Telegram', link: 'oxfoobar' },
        { name: 'Email', email: 'email' },
    ]

    const footerList = (name, link, hashlink, email) => {
        return (
            <ul>
                <li>
                    {link && <a href={link}>{name}</a>}
                    {hashlink && (
                        <HashLink smooth to={hashlink}>
                            {name}
                        </HashLink>
                    )}
                    {email && <a href={`mailto:${email}`}>{name}</a>}
                    {!link && !hashlink && !email && name}
                </li>
            </ul>
        )
    }
    return (
        <footer className="footer--container">
            <div className="footer--content-container">
                <div className="footer--content-left">
                    <img
                        className={'foobar'}
                        src={foobar}
                        alt={'foobar_transparent'}
                    />
                    <h2>Foobar</h2>
                </div>
                <div className="footer--content-center">
                    {footerNavLinks.map((item) =>
                        footerList(
                            item.name,
                            item.link,
                            item.hashlink,
                            item.email
                        )
                    )}
                </div>
                <div className="footer--content-right">
                    {socialNavLinks.map((item) =>
                        footerList(
                            item.name,
                            item.link,
                            item.hashlink,
                            item.email
                        )
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
