import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <Link to="/" style={{ color: `white`, marginRight: `1rem` }}>
          Home
        </Link>
        <Link to="/program" style={{ color: `white`, marginRight: `1rem` }}>
          Program
        </Link>
        <Link to="/about-us" style={{ color: `white`, marginRight: `1rem` }}>
          About Us
        </Link>
        <Link to="/contact" style={{ color: `white` }}>
          Contact
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
