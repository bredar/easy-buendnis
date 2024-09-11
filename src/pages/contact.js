import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ContactPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Contact Us</h1>
      <p className={styles.intro}>
        We'd love to hear from you. Please fill out the form below.
      </p>
    </div>
    <div className={styles.mainContent}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Subject: <input type="text" name="subject" required />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Contact Us" />

export default ContactPage
