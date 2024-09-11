import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ width: "100px" }}>
        <StaticImage
          src="../images/logo.png"
          loading="eager"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Easy Bündnis Logo"
        />
      </Link>
      <nav style={{ flex: 1, textAlign: "center" }}>
        <Link to="/program" style={{ color: `black`, marginRight: `1rem` }}>
          Programm
        </Link>
        <Link to="/about-us" style={{ color: `black`, marginRight: `1rem` }}>
          About Us
        </Link>
        <Link to="/contact" style={{ color: `black`, marginRight: `1rem` }}>
          Contact
        </Link>
        <Link
          to="/donate"
          style={{
            color: `white`,
            backgroundColor: `#0056b3`,
            padding: `0.5rem 1rem`,
            borderRadius: `5px`,
          }}
        >
          Spenden
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
