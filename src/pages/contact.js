import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ContactPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Kontakt</h1>
      <p className={styles.intro}>
        Wir würden gerne von Ihnen hören. Bitte füllen Sie das untenstehende
        Formular aus.
      </p>
    </div>
    <div className={styles.mainContent}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Ihr Name: <input type="text" name="name" required />
          </label>
        </p>
        <p>
          <label>
            Ihre E-Mail: <input type="email" name="email" required />
          </label>
        </p>
        <p>
          <label>
            Betreff: <input type="text" name="subject" required />
          </label>
        </p>
        <p>
          <label>
            Nachricht: <textarea name="message" required></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Senden</button>
        </p>
      </form>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Kontakt" />

export default ContactPage
