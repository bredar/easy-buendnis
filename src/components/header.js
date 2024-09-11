import React from "react"
import { Link } from "gatsby"
import "./header.css"
import logo from "../images/logo.png" // Stellen Sie sicher, dass der Pfad korrekt ist

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="header-content">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="logo-link">
          <img src={logo} alt={siteTitle} className="logo-image" />
        </Link>
      </h1>
      <nav>
        <Link to="/news" className="nav-link">
          Aktuelles
        </Link>
        <Link to="/program" className="nav-link">
          Programm
        </Link>
        <Link to="/donate" className="nav-link">
          Spenden
        </Link>
        <Link to="/contact" className="nav-link">
          Kontakt
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
