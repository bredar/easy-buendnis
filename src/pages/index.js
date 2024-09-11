import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logo.png"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Easy Bündnis Logo"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Easy Bündnis</h1>

      <p className={styles.intro}>
        Auf nach Utopia - gemeinsam, einfach, besser!
      </p>
    </div>
    <div className={styles.mainContent}>
      <h2>Unsere Vision</h2>
      <p>
        Das Easy Bündnis steht für eine Politik der Einfachheit, des
        Wohlbefindens und der Zukunftsorientierung. Wir glauben, dass eine
        bessere Welt möglich ist, wenn wir gemeinsam an Lösungen arbeiten, die
        das Leben für alle einfacher und angenehmer machen.
      </p>
      <h2>Unsere Kernpunkte</h2>
      <ul>
        <li>Vereinfachung der Bürokratie</li>
        <li>Arbeit und Freizeit im Einklang</li>
        <li>Nachhaltigkeit leicht gemacht</li>
        <li>Bildung für die Zukunft</li>
        <li>Gesundheit und Wohlbefinden</li>
        <li>Innovative Wirtschaftspolitik</li>
        <li>Direkte Demokratie und Transparenz</li>
      </ul>
      <Link to="/program" className={styles.button}>
        Unser vollständiges Programm
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Easy Bündnis - Auf nach Utopia" />

export default IndexPage
