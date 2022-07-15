import React from "react";
import { Link, NavLink } from "react-router-dom";


export const Navbar: React.FC = () => {


    const linkClass = (isActive: boolean) => {
        return isActive ? "nav-link link-active" : "nav-link";
    }

    

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <NavLink className={({isActive}) => isActive ? "navbar-brand link-active" : "navbar-brand"} to="/">Mia App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive}) => linkClass(isActive)} aria-current="page" to="/users">Users</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={({isActive}) => linkClass(isActive)} aria-current="page" to="/invoices">Invoices</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}