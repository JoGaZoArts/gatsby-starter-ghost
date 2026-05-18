import * as React from "react"
import { Layout } from "../components/common"

const PoemaTres = () => {
    const fuenteLegible = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    return (
        <Layout>
            <div className="container" style={{ padding: "0px 0", maxWidth: "750px", margin: "0 auto", fontFamily: fuenteLegible }}>
                
                <article style={{ marginTop: "0px" }}>
                    {/* Encabezado del Poema */}
                    <header style={{ textAlign: "center", marginBottom: "15px" }}>
                        <h1 style={{ fontSize: "3.8rem", fontWeight: "800", color: "#15171a", margin: "0", letterSpacing: "-1px", lineHeight: "1.1" }}>
                            Explorando
                        </h1>
                        <p style={{ color: "#6c757d", fontSize: "1.1rem", margin: "5px 0 0 0" }}>
                            Por Juan Diego Ladino Ramírez (JoGazo)
                        </p>
                    </header>

                    {/* Imagen destacada */}
                    <figure style={{ margin: "30px 0 0px 0", borderRadius: "8px 8px 0 0", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                        <img 
                            src="/images/poema3.jpg" 
                            alt="Explorando" 
                            style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover", objectPosition: "50% 15%", display: "block" }} 
                        />
                    </figure>

                    {/* Bloque introductorio fusionado */}
                    <div style={{ 
                        textAlign: "center", 
                        padding: "15px 20px", 
                        borderBottom: "1px solid #eef2f6",
                        marginBottom: "20px",
                        backgroundColor: "#fafafa",
                        borderRadius: "0 0 8px 8px"
                    }}>
                        <p style={{ color: "#6c757d", fontSize: "1.2rem", fontStyle: "italic", lineHeight: "1.6", margin: "0" }}>
                            "Salí de mi rutina a encontrar tu regalo, fue luz..."
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
{`Sé que no es tu intención enviarme a estos lugares, ni hacerme reflexionar sobre mi vida y cómo existo, o ponerme a pensar en ti para alimentarme de gratitud. Pero el olor y lo que veo aquí… me dan perspectiva.

Pero es inevitable: estoy aquí por ti. Un gesto perdido en este sitio me impulsó a llegar; el amor que te tengo quita la venda y mueve mi lucha. Sin esto, estaría ausente, suspendido en un espacio sin mancha.

Podría darte miedo saberlo, y eso me causa ternura; porque soy más duro, y dar la vida encaja con mi promesa. Este amor puro, añejado por los años, esquiva con gracia todas las excusas clásicas.

No eres difícil de amar; mereces amor del más puro. No estarás sola; tu amor ya da forma al mundo. Y con suerte, paciencia y tiempo, estaré aquí: no porque me necesites, ni porque te necesite… sino porque el amor nos ubica donde podemos crecer.`}
                    </section>

                </article>
            </div>
        </Layout>
    )
}

export default PoemaTres
