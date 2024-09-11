import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const ProgramPage = () => (
  <Layout>
    <div className={styles.mainContent}>
      <h1>Programm des Easy Bündnis</h1>
      <p className={styles.intro}>Slogan: "Auf nach Utopia"</p>

      <h2>Präambel</h2>
      <p>
        Das Easy Bündnis steht für eine Politik der Einfachheit, des
        Wohlbefindens und der Zukunftsorientierung. Wir glauben, dass eine
        bessere Welt möglich ist, wenn wir gemeinsam an Lösungen arbeiten, die
        das Leben für alle einfacher und angenehmer machen.
      </p>

      <h2>Kernpunkte unseres Programms</h2>

      <h3>1. Vereinfachung der Bürokratie</h3>
      <ul className="checkbox-list">
        <li>Digitalisierung und Automatisierung von Verwaltungsprozessen</li>
        <li>Reduzierung von Formularen und Anträgen auf das Nötigste</li>
        <li>Einführung eines zentralen Bürgerportals für alle Behördengänge</li>
      </ul>

      <h3>2. Arbeit und Freizeit im Einklang</h3>
      <ul className="checkbox-list">
        <li>Förderung der 4-Tage-Arbeitswoche</li>
        <li>Unterstützung von Homeoffice und flexiblen Arbeitszeiten</li>
        <li>
          Investitionen in Automatisierung zur Entlastung der Arbeitnehmer
        </li>
      </ul>

      <h3>3. Nachhaltigkeit leicht gemacht</h3>
      <ul className="checkbox-list">
        <li>
          Ausbau des öffentlichen Nahverkehrs mit Fokus auf
          Benutzerfreundlichkeit
        </li>
        <li>
          Förderung erneuerbarer Energien durch vereinfachte
          Genehmigungsverfahren
        </li>
        <li>Einführung eines Pfandsystems für alle Verpackungen</li>
      </ul>

      <h3>4. Bildung für die Zukunft</h3>
      <ul className="checkbox-list">
        <li>
          Modernisierung des Bildungssystems mit Fokus auf digitale Kompetenzen
        </li>
        <li>
          Einführung von "Lebenskompetenzen" als Schulfach (z.B. Finanzen,
          Ernährung, Kommunikation)
        </li>
        <li>Kostenlose Weiterbildungsangebote für alle Altersgruppen</li>
      </ul>

      <h3>5. Gesundheit und Wohlbefinden</h3>
      <ul className="checkbox-list">
        <li>Ausbau der präventiven Gesundheitsversorgung</li>
        <li>Förderung von Work-Life-Balance und mentaler Gesundheit</li>
        <li>Investitionen in Grünflächen und Erholungsgebiete in Städten</li>
      </ul>

      <h3>6. Innovative Wirtschaftspolitik</h3>
      <ul>
        <li>
          Unterstützung von Start-ups und innovativen Unternehmen durch
          vereinfachte Gründungsprozesse
        </li>
        <li>Förderung der Kreislaufwirtschaft</li>
        <li>
          Einführung eines bedingungslosen Grundeinkommens zur Existenzsicherung
        </li>
      </ul>

      <h3>7. Direkte Demokratie und Transparenz</h3>
      <ul>
        <li>Einführung regelmäßiger Bürgerentscheide zu wichtigen Themen</li>
        <li>
          Transparente Darstellung aller politischen Entscheidungsprozesse
        </li>
        <li>Förderung von Bürgerinitiativen und lokalem Engagement</li>
      </ul>

      <h3>8. Migration und Integration</h3>
      <ul>
        <li>Einführung eines Punktesystems für qualifizierte Einwanderung</li>
        <li>Vereinfachung und Beschleunigung von Asylverfahren</li>
        <li>
          Förderung von Integrationsprogrammen in Zusammenarbeit mit lokalen
          Gemeinschaften
        </li>
        <li>
          Schaffung eines "Buddy-Systems" zur Unterstützung von Neuankömmlingen
        </li>
      </ul>

      <h3>9. Kriminalitätsbekämpfung und öffentliche Sicherheit</h3>
      <ul>
        <li>Fokus auf Prävention durch Bildung und soziale Programme</li>
        <li>
          Investitionen in moderne Polizeiarbeit und Deeskalationstraining
        </li>
        <li>
          Einführung von Restorative Justice Programme für Kleinkriminalität
        </li>
        <li>
          Verstärkte Bekämpfung von Cyberkriminalität und Wirtschaftsverbrechen
        </li>
      </ul>

      <h3>10. Altersvorsorge und demographischer Wandel</h3>
      <ul>
        <li>
          Flexibilisierung des Rentenalters mit Anreizen für längere
          Berufstätigkeit
        </li>
        <li>
          Einführung eines "Generationenfonds" zur langfristigen Finanzierung
          der Altersvorsorge
        </li>
        <li>
          Förderung altersgerechter Wohnkonzepte und Mehrgenerationenhäuser
        </li>
        <li>Unterstützungsprogramme für pflegende Angehörige</li>
      </ul>

      <h3>11. Gesundheitssystem und Krankenkasse</h3>
      <ul>
        <li>Einführung einer Bürgerversicherung für alle</li>
        <li>Förderung von Präventionsmaßnahmen durch Bonusprogramme</li>
        <li>Digitalisierung des Gesundheitswesens zur Effizienzsteigerung</li>
        <li>Investitionen in die Ausbildung von Gesundheitspersonal</li>
      </ul>

      <h3>12. Moderne Verteidigung und Friedenssicherung</h3>
      <ul>
        <li>
          Umstrukturierung der Armee zu einer flexiblen Einsatztruppe für
          Katastrophenschutz und internationale Friedensmissionen
        </li>
        <li>
          Investition in Cybersicherheit und digitale Verteidigungssysteme
        </li>
        <li>
          Förderung von Abrüstungsinitiativen und internationaler Zusammenarbeit
        </li>
        <li>
          Einführung eines freiwilligen "Gesellschaftsjahres" als Alternative
          zum Militärdienst
        </li>
      </ul>

      <h3>13. Zukunftsorientierte Verkehrspolitik</h3>
      <ul className="checkbox-list">
        <li>
          Ausbau des öffentlichen Nahverkehrs mit Fokus auf Vernetzung und
          Benutzerfreundlichkeit
        </li>
        <li>
          Förderung von E-Mobilität durch flächendeckende Ladeinfrastruktur und
          Kaufanreize
        </li>
        <li>
          Entwicklung intelligenter Verkehrsleitsysteme zur Reduzierung von
          Staus
        </li>
        <li>Ausbau des Radwegenetzes und Schaffung autofreier Innenstädte</li>
        <li>
          Investition in Forschung und Entwicklung von autonomen Fahrzeugen und
          Hyperloop-Technologien
        </li>
      </ul>

      <h2>Schlusswort</h2>
      <p>
        Das Easy Bündnis steht für eine Politik, die das Leben der Menschen
        spürbar verbessert und vereinfacht. Wir glauben an die Kraft der
        Gemeinschaft und daran, dass wir gemeinsam eine bessere Zukunft
        gestalten können. Mit Ihrer Unterstützung machen wir uns auf den Weg
        nach Utopia – eine Gesellschaft, in der Wohlstand, Nachhaltigkeit und
        Lebensqualität für alle Realität werden.
      </p>
      <p className={styles.intro}>
        Auf nach Utopia – gemeinsam, einfach, besser!
      </p>

      <Link to="/" className={styles.button}>
        Zurück zur Startseite
      </Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Programm des Easy Bündnis" />

export default ProgramPage
