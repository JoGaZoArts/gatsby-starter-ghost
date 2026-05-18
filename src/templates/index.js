import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Layout } from "../components/common"

/**
* Portada Principal - 3 poemas en una sola fila
*/
const IndexPage = ({ location }) => {
    const fuenteLegible = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'

    // Definición manual de tus poemas locales
    const misPoemas = [
        {
            id: "poema-1",
            title: "Comienzo",
            slug: "/comienzo",
            excerpt: "Fueron más de 10 años para reconocerte... y hallar el amor no reconocido",
            feature_image: "/images/poema1.jpg"
        },
        {
            id: "poema-2",
            title: "Caída",
            slug: "/caida",
            excerpt: "No me reconozco... te amo... pero estoy ausente",
            feature_image: "/images/poema2.jpg"
        },
        {
            id: "poema-3",
            title: "Explorando",
            slug: "/explorando",
            excerpt: "Salí de mi rutina a encontrar tu regalo, fue luz...",
            feature_image: "/images/poema3.jpg"
        }
    ]

    return (
        <Layout isHome={true}>
            <div className="container" style={{ fontFamily: fuenteLegible, padding: "0px 0 60px 0" }}>
                
                {/* Encabezado del Index sin subtítulo */}
                <header style={{ textAlign: "center", marginBottom: "50px" }}>
                    <h1 style={{ fontSize: "3.8rem", fontWeight: "800", color: "#15171a", margin: "0", letterSpacing: "-1.5px", lineHeight: "1.1" }}>
                        Mis Poemas
                    </h1>
                </header>

                {/* Estilos inyectados para la cuadrícula de 3 columnas en una fila */}
                <style>{`
                    .custom-feed {
                        max-width: 1140px; /* Un poco más amplio para que los 3 respiren bien en horizontal */
                        margin: 0 auto;
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr; /* Tres columnas idénticas en una sola fila */
                        grid-gap: 30px; /* Separación elegante entre las 3 tarjetas */
                    }
                    .custom-card {
                        background: #ffffff;
                        min-height: 400px;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.04);
                        border-radius: 8px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        text-decoration: none;
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                    .custom-card:hover {
                        transform: translateY(-4px);
                        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                    }
                    .custom-card-image-wrap {
                        width: 100%;
                        height: 240px; /* Altura ideal para formato vertical/cuadrado de 3 columnas */
                        overflow: hidden;
                        background: #f4f5f6;
                    }
                    .custom-card-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: 50% 20%;
                    }
                    .custom-card-content {
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                    }
                    .custom-card-title {
                        font-size: 1.7rem;
                        font-weight: 700;
                        color: #15171a;
                        margin: 0 0 10px 0;
                        line-height: 1.2;
                    }
                    .custom-card-excerpt {
                        font-size: 1.05rem;
                        color: #6c757d;
                        line-height: 1.5;
                        margin: 0;
                        font-style: italic;
                    }
                    @media (max-width: 992px) {
                        .custom-feed {
                            grid-template-columns: 1fr 1fr; /* Pasa a 2 columnas en pantallas medianas o tablets */
                        }
                    }
                    @media (max-width: 768px) {
                        .custom-feed {
                            grid-template-columns: 1fr; /* Una sola columna en celulares */
                            padding: 0 20px;
                        }
                    }
                `}</style>

                {/* Renderizado de los tres poemas en línea */}
                <section className="custom-feed">
                    {misPoemas.map((poema) => (
                        <Link to={poema.slug} key={poema.id} className="custom-card">
                            <div className="custom-card-image-wrap">
                                <img 
                                    src={poema.feature_image} 
                                    alt={poema.title} 
                                    className="custom-card-image" 
                                />
                            </div>
                            <div className="custom-card-content">
                                <h2 className="custom-card-title">{poema.title}</h2>
                                <p className="custom-card-excerpt">{poema.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </Layout>
    )
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
}

export default IndexPage
