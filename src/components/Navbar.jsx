import React from 'react'
import {navIcons, navLinks} from "#components/constants/index.js";

const Navbar = () => {

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Logo" />
                <p className="font-bold">Tanmay's Portfolio</p>

                <ul>
                    { navLinks.map(({id, name}) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} className="icon-hover" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
