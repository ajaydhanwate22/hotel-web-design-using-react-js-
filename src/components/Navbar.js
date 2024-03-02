import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();

  const gotobookingpage = () => {
    alert("Go to Contact Page")
    navigate('/contact');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <Link style={{ color: "#FEA116", fontSize: "25px" }} className="navbar-brand" to="/"> <i style={{ color: "#FEA116", fontSize: "25px" }} className="fa fa-3x fa-utensils"></i> Resturant</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
              </li>
            </ul>
            <button type="button" class="btn btn-warning"  onClick={gotobookingpage}>Book A Table</button>
          </div>
        </div>
      </nav>

    </>
  )
}
