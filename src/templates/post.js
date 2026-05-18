import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout } from "../components/common"

const Post = ({ pageContext }) => {
    const { slug } = pageContext;

    // DICCIONARIO DE CONTENIDOS: EDITA AQUÍ TUS POEMAS E IMÁGENES
    const contenidoArticulos = {
        "introduccion-sitios-estaticos-jamstack": {
            title: "Primer Poema: [Título de tu Poema Aquí]",
            // OPCIÓN A: URL de internet (puedes pegar un enlace directo de Unsplash, Pinterest, etc.)
            // OPCIÓN B: Ruta local si guardas la foto en tu proyecto: image: "/images/mi-foto-1.jpg"
            image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1200", 
            html: `
                <div style="text-align: center; font-style: italic; font-family: 'Georgia', serif;">
                    <p>Aquí va el primer verso de tu poema,<br>
                    escribiendo con el alma y la mente,<br>
                    bajo el cielo que el código quema.</p>
                    
                    <p>Cada estrofa que nace de repente,<br>
                    es un trazo de luz en la pantalla,<br>
                    un latido que el tiempo no calla.</p>
                </div>
            `
        },
        "optimizacion-rendimiento-gatsby-graphql": {
            title: "Segundo Poema: [Título de tu Poema Aquí]",
            image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1200",
            html: `
                <div style="text-align: center; font-style: italic; font-family: 'Georgia', serif;">
                    <p>Este es el espacio para tu segundo escrito.<br>
                    Puedes separar los versos usando la etiqueta &lt;br&gt;<br>
                    para controlar dónde salta la línea.</p>
                    
                    <p>Y usas la etiqueta &lt;p&gt; para separar las estrofas<br>
                    así como ves en este ejemplo gráfico.</p>
                </div>
            `
        },
        "despliegue-continuo-hosting-estatico": {
            title: "Tercer Poema: [Título de tu Poema Aquí]",
            image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1200",
            html: `
                <div style="text-align: center; font-style: italic; font-family: 'Georgia', serif;">
                    <p>Tu tercer poema cierra la trilogía.<br>
                    El diseño ya está centrado y con tipografía elegante<br>
                    estilo clásica para que se lea como un libro.</p>
                </div>
            `
        }
    };

    const articuloActual = contenidoArticulos[slug] || {
        title: "Escrito no encontrado",
        image: "",
        html: "<p>El contenido solicitado no se encuentra disponible.</p>"
    };

    return (
        <Layout>
            <div className="container" style={{ padding: "40px 0", maxWidth: "700px", margin: "0 auto" }}>
                <Link to="/" style={{ color: "#15171a", textDecoration: "none", fontWeight: "600", fontSize: "0.95rem" }}>
                    ← Volver al inicio
                </Link>
                
                <article className="content" style={{ marginTop: "30px" }}>
                    <header style={{ textAlign: "center", marginBottom: "30px" }}>
                        {/* Tamaño del Título Principal interno */}
                        <h1 className="content-title" style={{ fontSize: "2.2rem", fontWeight: "700", color: "#15171a", fontFamily: "'Georgia', serif" }}>
                            {articuloActual.title}
                        </h1>
                        <p style={{ color: "#777", fontSize: "1rem", marginTop: "10px" }}>
                            Por: Juan Diego Ladino
                        </p>
                    </header>

                    {articuloActual.image && (
                        <figure className="post-feature-image" style={{ margin: "30px 0" }}>
                            <img src={articuloActual.image} alt={articuloActual.title} style={{ width: "100%", borderRadius: "4px", height: "auto", maxHeight: "450px", objectFit: "cover" }} />
                        </figure>
                    )}
                    
                    {/* Tamaño de la letra del poema ajustada a 1.25rem para lectura cómoda */}
                    <section 
                        className="content-body" 
                        style={{ fontSize: "1.25rem", lineHeight: "2", color: "#222" }}
                        dangerouslySetInnerHTML={{ __html: articuloActual.html }} 
                    />
                </article>
            </div>
        </Layout>
    );
};

Post.propTypes = {
    pageContext: PropTypes.shape({
        slug: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;
