import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
    let history = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("./");
    }
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDcMQIDqtkXtO33Ja-Qk_6-686Ts9x8NQ7g&usqp=CAU" alt="" style={{height:'50px', width:'50px'}}></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex"> 
                    <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-warning mx-1" to="/signup" role="button">Signup</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-danger"> Logout </button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
