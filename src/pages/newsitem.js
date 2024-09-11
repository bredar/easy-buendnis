import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={styles.textCenter}>
        <h1>{post.headings[0]?.value || "Untitled"}</h1>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <p className={styles.date}>Lesezeit: {post.timeToRead} min</p>
      </div>
      <div className={styles.mainContent}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/aktuelles">Zurück zur Übersicht</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
      }
      headings {
        value
        depth
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.markdownRemark.headings[0]?.value || "Blog Post"} />
)

export default BlogPost
