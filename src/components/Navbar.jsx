import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    
                        <Link to="/home" className="nav-link active text-white">
                            <i className="bi bi-house-door"></i> Home
                        </Link>
                        <Link to="/contacto" className="nav-link active text-white">
                            <i className="bi bi-person-rolodex"></i> Contacto
                        </Link>

                        
                    </div>
                </div>
                <span className="text-white"><i className="bi bi-cup-hot-fill"></i> Happy Cake</span>
            </div>
        </nav>
    )
}

export default Navbar