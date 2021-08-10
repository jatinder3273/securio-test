import React from 'react'
import Logo from '../assets/images/Logo.png';
const Header = () => {
    return (
       <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container Header">
                    <img src={Logo} alt="logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#1">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="link" href="#1">Qoute in 60 Seconds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#1">Claim</a>
                            </li>  
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success Login" type="submit">Login</button>
                            <button className="btn btn-outline-success Contact_Us" type="submit">Contact us</button>
                        </form>
                    </div>
                </div>
            </nav>
       </header>
    )
}

export default Header
