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
            <Link
              to={`/blog/${post.id}`}
              className={styles.blogPostLink}
              key={post.id}
            >
              <article className={styles.blogPost}>
                <h2>{title}</h2>
                <p className={styles.date}>{post.frontmatter.date}</p>
                <p className={styles.abstract}>{post.excerpt}</p>
                <span className={styles.readMore}>Weiterlesen</span>
              </article>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          title
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`

export const Head = () => <Seo title="Aktuelles" />

export default AktuellesPage
