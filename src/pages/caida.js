import * as React from "react"
import { Layout } from "../components/common"

const PoemaDos = () => {
    const fuenteLegible = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

    return (
        <Layout>
            <div className="container" style={{ padding: "0px 0", maxWidth: "750px", margin: "0 auto", fontFamily: fuenteLegible }}>
                
                <article style={{ marginTop: "0px" }}>
                    {/* Encabezado del Poema */}
                    <header style={{ textAlign: "center", marginBottom: "15px" }}>
                        <h1 style={{ fontSize: "3.8rem", fontWeight: "800", color: "#15171a", margin: "0", letterSpacing: "-1px", lineHeight: "1.1" }}>
                            Caída
                        </h1>
                        <p style={{ color: "#6c757d", fontSize: "1.1rem", margin: "5px 0 0 0" }}>
                            Por Juan Diego Ladino Ramírez (JoGazo)
                        </p>
                    </header>

                    {/* Imagen destacada */}
                    <figure style={{ margin: "30px 0 0px 0", borderRadius: "8px 8px 0 0", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
                        <img 
                            src="/images/poema2.jpg" 
                            alt="Caída" 
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
                            "No me reconozco... te amo... pero estoy ausente"
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
{`No puedo conciliar el sueño, el calor del odio y la vergüenza que me habitan corrompen la paz... Amar y comunicarlo no se da, es poco o mucho, a veces definitivamente nada, y la ausencia queda.

La intención corroe cuando abunda, se disocia su significado y brilla por su ausencia, soy un monstruo. La fe en la desgracia y el sinsabor continúo me trajeron aquí. "No mereces, no haces parte, vete."

Luchar por erigir una bandera con su escudo trae puñaladas a mi paso, sin reina solo es un asta de velo blanco que cita a rendirse. No reconozco el nombre, lo susurró Gabriel a mi oído y puedo admitir que este lenguaje es ajeno.

Sigilo a sigilo los ángeles y su energía evitan el contacto, no soy digno. En mi piel están las marcas... lo intento tercamente y daño el amor que aspiro.

Aparentemente no estoy loco, siento profundo y cala al alma estar ausente en el mundo que habito. Conjuro alivio, perdón... confianza. Bien necesito para llegar al fin de este destino rodeado de lo que permanezca de mí.`}
                    </section>

                </article>
            </div>
        </Layout>
    )
}

export default PoemaDos
