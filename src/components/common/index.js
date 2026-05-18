import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { Layout, PostCard, Pagination } from "../components/common"
import { MetaData } from "../components/common/meta"

const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <section style={{ padding: "40px 0", textAlign: "center" }}>
                        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>Entradas del Blog</h2>
                        <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 40px auto" }}>
                            A continuación se presentan las 3 entradas requeridas para la actividad evaluativa de desarrollo web estático.
                        </p>
                    </section>

                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // Esto pintará de forma limpia SOLO los posts que tú dejes activos
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
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