import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";

// Styles
import "../../styles/app.css";

/**
 * Main layout component (Optimizado para la UNIR con barra negra)
 */
const DefaultLayout = ({ children, bodyClass }) => {
    return <>
        <Helmet>
            <html lang="es" />
            <body className={bodyClass} />
            {/* Forzamos el título aquí arriba */}
            <title>Juan Ladino's Blog</title>
            <meta property="og:title" content="Juan Ladino's Blog" />
        </Helmet>

        <div className="viewport">
            <div className="viewport-top">
                {/* Cabecera con la elegante franja negra original restaurada */}
                <header className="site-head" style={{ padding: "30px 0", background: "#15171A", borderBottom: "1px solid #000" }}>
                    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="site-mast" style={{ display: "block", textAlign: "center" }}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <span style={{ 
                                    color: '#FFFFFF', /* Letras blancas para contrastar con el fondo negro */
                                    fontSize: '4rem', 
                                    fontWeight: '800',
                                    letterSpacing: '-1px'
                                }}>
                                    Juan Ladino's Blog
                                </span>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="site-main">
                    {/* Aquí se inyectan las entradas del index.js */}
                    {children}
                </main>
            </div>

            <div className="viewport-bottom">
                {/* Footer limpio sin enlaces repetidos */}
                <footer className="site-foot" style={{ padding: "20px 0", background: "#f8f9fa", marginTop: "40px" }}>
                    <div className="site-foot-nav container" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="site-foot-nav-left" style={{ textAlign: "center", color: "#666" }}>
                            <Link to="/" style={{ fontWeight: "600", color: "#15171a", textDecoration: "none" }}>Juan Ladino's Blog</Link> © {new Date().getFullYear()} &mdash; Actividad 1 - UNIR
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>;
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings {
  allGhostSettings {
    edges {
      node {
        title
      }
    }
  }
}
`}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
