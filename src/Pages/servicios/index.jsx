import { Link } from "react-router-dom"
import per1 from "../../Assets/per1.png"
import per2 from "../../Assets/Per2.png"
import per3 from "../../Assets/per3.png"
import per4 from "../../Assets/per4.png"
import per5 from "../../Assets/per5.png"
import frame from "../../Assets/Frame 294.png"
import { useState } from "react"



const Boton2 = () => {
    return(
        <>
            <div className="datos Val">
                <img src={per4} alt="" />
                <div className="ContVal">
                    <h4>Benjamín Guzmán</h4>
                    <h5>Excelente su trabajo, responsable, amable y muy educado. Recomendable</h5>
                    <img src={frame} alt="" />
                </div>
            </div>
            <div className="datos Val">
                <img src={per5} alt="" />
                <div className="ContVal">
                    <h4>Benjamín Guzmán</h4>
                    <h5>Excelente su trabajo, responsable, amable y muy educado. Recomendable</h5>
                    <img src={frame} alt="" />
                </div>
            </div>
        </>
    )
}



const Buton = () =>{
    const [show3, setShow3] = useState()
    return(
        <div className="ContGdatos">
            <h4>Datos personales</h4>
            <div className="datos">
                <h4><b>Nombre Y apellido:</b> Gerez Ramon Orlando</h4>
                <h4><b>Cuidad:</b> Santiago del Estero</h4>
                <h4><b>Especialidades:</b> Oficial albañil</h4>
            </div>
            <Link className="Btn bton" >Contactar</Link>
            <div className="datYVal">
                <button className="Buton" onClick={() => setShow3(!show3)}>Valoraciones</button>
            </div>
            {show3 && <Boton2/>}
        </div>
    )
}


const Servicios = () => {
    const [show, setShow] = useState()
    const [show1, setShow1] = useState()
    const [show2, setShow2] = useState()

    return (
        <div className="ContSer">
            <header className="serHeader">
                <input type="search" name="" id="" placeholder="Buscar aqui.." />
                <h1>Nuestros <b>Servicios</b></h1>
            </header>

            <h2>Apostillas</h2>
            <div className="ContApos">
                <h4>Ubicación</h4>
                <h4>Trayectoria</h4>
            </div>

            <main className="ContPersonal">
                <div className="Cont-p">
                    <div className="ContPers" onClick={() => setShow(!show)}>
                        <img src={per1} alt="" />
                        <div>
                            <h3>Ramon Orlando Gerez</h3>
                            <h5>Escribano</h5>
                        </div>
                    </div>
                    {show && <Buton/>}
                </div>
                <div className="Cont-p">
                    <div className="ContPers" onClick={() => setShow1(!show1)}>
                        <img src={per2} alt="" />
                        <div>
                            <h3>Ramon Orlando Gerez</h3>
                            <h5>Escribano</h5>
                        </div>
                    </div>
                    {show1 && <Buton/>}
                </div>
                <div className="Cont-p">
                    <div className="ContPers" onClick={() => setShow2(!show2)}>
                        <img src={per3} alt="" />
                        <div>
                            <h3>Ramon Orlando Gerez</h3>
                            <h5>Escribano</h5>
                        </div>
                    </div>
                    {show2 && <Buton/>}
                </div>
            </main>
        </div>
    )
}

export { Servicios };