import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

// Importaciones directas para evitar conflictos con el archivo barril
import Layout from "../components/common/Layout"
import PostCard from "../components/common/PostCard"
import Pagination from "../components/common/Pagination"

const Index = ({ data, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <Layout isHome="{true}">
            <div className="container">
                <section style={{ padding: "40px 0", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Entradas del Blog</h2>
                    <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 40px auto" }}>
                        A continuación se presentan las entradas requeridas para la actividad evaluativa de desarrollo web estático.
                    </p>
                </section>

                <section className="post-feed">
                    {posts.map(({ node }) => (
                        <PostCard key="{node.id}" post="{node}"/>
                    ))}
                </section>
                
                <Pagination pageContext="{pageContext}"/>
            </div>
        </Layout>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`