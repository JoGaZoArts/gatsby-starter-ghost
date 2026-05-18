import * as React from "react"
import { Layout } from "../components/common"

const PoemaUno = () => {
    const fuenteLegible = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    return (
        <Layout>
            <div className="container" style={{ padding: "0px 0", maxWidth: "750px", margin: "0 auto", fontFamily: fuenteLegible }}>
                
                <article style={{ marginTop: "0px" }}>
                    {/* Encabezado del Poema */}
                    <header style={{ textAlign: "center", marginBottom: "15px" }}>
                        <h1 style={{ fontSize: "3.8rem", fontWeight: "800", color: "#15171a", margin: "0", letterSpacing: "-1.5px", lineHeight: "1.1" }}>
                            Comienzo
                        </h1>
                        <p style={{ color: "#6c757d", fontSize: "1.1rem", margin: "5px 0 0 0" }}>
                            Por Juan Diego Ladino Ramírez (JoGazo)
                        </p>
                    </header>

                    {/* Imagen destacada - Margen vertical reducido a la mitad */}
                    <figure style={{ margin: "30px 0 0px 0", borderRadius: "8px 8px 0 0", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                        <img 
                            src="/images/poema1.jpg" 
                            alt="Comienzo" 
                            style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover", objectPosition: "50% 15%", display: "block" }} 
                        />
                    </figure>

                    {/* Bloque introductorio fusionado y más compacto */}
                    <div style={{ 
                        textAlign: "center", 
                        padding: "15px 20px", 
                        borderBottom: "1px solid #eef2f6",
                        marginBottom: "20px",
                        backgroundColor: "#fafafa",
                        borderRadius: "0 0 8px 8px"
                    }}>
                        <p style={{ color: "#6c757d", fontSize: "1.2rem", fontStyle: "italic", lineHeight: "1.6", margin: "0" }}>
                            "Fueron más de 10 años para reconocerte... y hallar el amor no reconocido"
                        </p>
                    </div>
                    
                    {/* Cuerpo del poema */}
                    <section style={{ 
                        fontSize: "1.3rem", 
                        lineHeight: "2.1",   
                        color: "#15171a", 
                        textAlign: "left",       
                        whiteSpace: "pre-line", 
                        padding: "10px", 
                        fontWeight: "400",
                        maxWidth: "680px",       
                        margin: "0 auto",        
                        letterSpacing: "-0.1px"
                    }}>
{`Mi lugar en tu universo siempre tuvo un nombre abstracto: amistad, química… o un amor no admitido ni propuesto. Siempre te he adorado, y hoy, después de una década, quererte no es ajeno. Es algo que ya estaba ahí, y sigue siéndolo más allá de lo que la lógica permitiría. Suena absurdo… haber dejado dormir un sentimiento por años y descubrir que aún palpita.

Cuando sonríes, reconozco algo que ya estaba en ti entonces. Incluso lo que no te gusta de ti, a mí siempre me ha encantado. Aun cuando no logras verte con asombro, yo encuentro ahí a la mujer que amo… y me gusta simplemente existir a tu lado.

Sé que llego roto. A veces habito formas que no son propias. Aun así, intento —de maneras torpes— que sepas que eres espléndida, que tu bienestar me importa a cada segundo, y que lo que llevo conmigo es inmenso.

No se llega a una relación anunciando, a bombo y platillo, que un amor antiguo sigue en pie. Entiendo que eso asusta… a mí también me da miedo. Pero la memoria del corazón no despierta igual en todos, y yo espero, a su tiempo, que aquello que exista por mí en el tuyo… encuentre su forma; para mí, es una verdad que permanecerá conmigo.`}
                    </section>

                </article>
            </div>
        </Layout>
    )
}

export default PoemaUno
