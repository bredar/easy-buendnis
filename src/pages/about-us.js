import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AboutUsPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>About Us</h1>
      <p className={styles.intro}>
        Welcome to our company. We're dedicated to innovation and excellence.
      </p>
    </div>
    <div>
      <h2>Our Leadership</h2>
      <div className={styles.listItem}>
        <h3>François ZBinden</h3>
        <p>Chief Executive Officer (CEO)</p>
        <p>
          François ZBinden leads our company with vision and expertise. With
          years of experience in the industry, François drives our strategy and
          growth.
        </p>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage
