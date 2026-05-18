import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

// Desde aquí la ruta sube un nivel (../) y entra a la carpeta común
import { Layout, PostCard, Pagination } from "../components/common"

const Index = ({ data, pageContext }) => {
    // Tomamos los posts que vienen desde Ghost
    const posts = data.allGhostPost.edges

    return (
        <Layout isHome={true}>
            <div className="container">
                {/* Encabezado limpio y minimalista para el ejercicio de la UNIR */}
                <section style={{ padding: "40px 0", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.2rem", marginBottom: "10px", fontWeight: "700" }}>
                        Entradas del Blog
                    </h2>
                    <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 30px auto", fontSize: "1.1rem" }}>
                        Bienvenido. A continuación encontrarás las 3 entradas requeridas con texto e imágenes integradas.
                    </p>
                </section>

                {/* El contenedor nativo que pinta las tarjetas del blog */}
                <section className="post-feed">
                    {posts.map(({ node }) => (
                        <PostCard key={node.id} post={node} />
                    ))}
                </section>
                
                <Pagination pageContext={pageContext} />
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