import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const AktuellesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>Aktuelles</h1>
        <p className={styles.intro}>
          Hier finden Sie die neuesten Nachrichten und Updates.
        </p>
      </div>
      <div className={styles.mainContent}>
        {posts.map(post => {
          const title = post.frontmatter.title
          return (
            <div key={post.id} className={styles.blogPost}>
              <h2>{title}</h2>
              <p className={styles.date}>{post.frontmatter.date}</p>
              <p className={styles.abstract}>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`}>Weiterlesen</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { id: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "DD.MM.YYYY")
        }
        headings(depth: h1) {
          value
        }
      }
    }
  }
`

export const Head = () => <Seo title="Aktuelles" />

export default AktuellesPage
