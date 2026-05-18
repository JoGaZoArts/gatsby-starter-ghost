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
        {/* Reducimos el padding de 40px a 15px arriba para pegarlo al menú, y agrandamos la letra */}
        <section style={{ padding: "15px 0 30px 0", textAlign: "center" }}>
            <h1 style={{ 
                fontSize: "3.5rem",       /* Mucho más grande y visible */
                fontWeight: "800",        /* Más gruesa e imponente */
                letterSpacing: "-1px",    /* Toque moderno y compacto */
                marginBottom: "15px", 
                color: "#15171a" 
            }}>
                Entradas del Blog
            </h1>
            <p style={{ 
                color: "#666", 
                maxWidth: "700px", 
                margin: "0 auto", 
                fontSize: "1.25rem",      /* Subimos un poco el tamaño del subtítulo */
                lineHeight: "1.5" 
            }}>
                Bienvenido.
                Aquí encontrarás las entradas de mi Blog.
            </p>
        </section>

        {/* El contenedor que pinta las tarjetas */}
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