import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SuccessPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>Vielen Dank!</h1>
      <p className={styles.intro}>
        Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so bald wie
        möglich bei Ihnen melden.
      </p>
      <Link to="/">Zurück zur Startseite</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Nachricht gesendet" />

export default SuccessPage
