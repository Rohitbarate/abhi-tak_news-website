import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-danger" to="/">ABHI-Tak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className=" mx-2 nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className=" mx-2 nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        )
    }
}
