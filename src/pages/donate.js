import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = React.useState("")
  const [customAmount, setCustomAmount] = React.useState("")

  const handleAmountChange = amount => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = e => {
    setCustomAmount(e.target.value)
    setSelectedAmount("custom")
  }

  const buttonStyle = amount => ({
    padding: "15px 25px",
    border: "2px solid #0056b3",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "all 0.3s",
    backgroundColor: selectedAmount === amount ? "#0056b3" : "white",
    color: selectedAmount === amount ? "white" : "#0056b3",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow:
      selectedAmount === amount ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    transform: selectedAmount === amount ? "translateY(-2px)" : "none",
  })

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>Spenden</h1>
        <p className={styles.intro}>
          Unterstützen Sie unsere Arbeit mit einer Spende
        </p>
      </div>
      <div className={styles.mainContent}>
        <p>
          Wählen Sie einen Betrag aus oder geben Sie einen eigenen Betrag ein:
        </p>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="fzbinden@outlook.com" />
          <input type="hidden" name="currency_code" value="CHF" />
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[5, 10, 20, 50].map(amount => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountChange(amount.toString())}
                style={buttonStyle(amount.toString())}
              >
                {amount} CHF
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              onClick={() => setSelectedAmount("custom")}
              style={buttonStyle("custom")}
            >
              Anderer Betrag
            </button>
            <span>CHF</span>
            <input
              type="number"
              name="amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              style={{
                width: "100px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #0056b3",
              }}
              min="1"
            />
          </div>
          <input
            type="submit"
            value="Jetzt spenden"
            className={styles.button}
            style={{
              backgroundColor: "#0056b3",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
              transition: "all 0.3s",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </form>
        <ul>
          {donationOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Spenden - Easy Bündnis" />

export default DonatePage
