import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{

   
        return (

            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Dekho</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >

                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/business">Business</Link> </li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                                <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" to="/">Link</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Link
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a className="dropdown-item" to="/">Action</Link></li>
                                        <li><a className="dropdown-item" to="/">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" to="/">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Link</Link>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>

            </>
        );
    
}

export default Navbar;