import React from 'react'
import { CartWidget } from "../cartWidget/CartWidget"
import { RiTShirtAirLine } from "react-icons/ri"
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
                <Link className="navbar-brand" to="/"><RiTShirtAirLine size={45} color={"#fff"}/><span className="text-white">Depor Indumentaria</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item p-2">
                    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link className="nav-link text-white" to="/category/remeras">Remeras</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link className="nav-link text-white" to="/category/pantalones">Pantalones</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link className="nav-link text-white" to="/category/zapatillas">Zapatillas</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link className="nav-link text-white" to="/category/buzos">Buzos</Link>
                    </li>
                </ul>
            </div>
            <Link to="/cart"><CartWidget/></Link> 
        </div>
    </nav>    
    )
}