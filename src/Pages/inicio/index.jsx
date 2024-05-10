import { Link } from "react-router-dom";
import logo from "../../Assets/Gess.png"
import ofice from "../../Assets/Ofice.png"
import check from "../../Assets/Doble-check.png"

const Inicio = () => {
    return (
        <>
            <div className="Cont-Uno">
                <h4>Gestoria de tramites</h4>
                <h1>Soluciones rapidas y eficientes a <b>tu alcance</b></h1>
                <h3><b>Nuestro objetivo</b> es resolver problemas y proporcionar soluciones rapidas en situaciones complicadas y apremiantes</h3>
                <Link to="/login" className="Link"> <b>Ingresar {`>`} </b></Link>
                <img src={logo} alt="logo" className="Gess" />
            </div>
            <div className="Cont">
                <h2>¿Quienes somos?</h2>
                <div className="Dos">
                    <div className="ContDos">
                        <h4>Gestoria de tramites</h4>
                        <h5>En los últimos años hemos resuelto gran cantidad de requerimientos realizados desde el exterior, con notable eficacia y rapidez, de personas que obtuvieron información en consulados argentinos; ya que somos la única empresa argentina que asegura cobertura en todo el territorio nacional, con la máxima trayectoria y seguridad. Nuestros esfuerzos y compromiso, nos permiten trabajar a lo largo y ancho del territorio nacional, brindando servicios de documentación a cientos de argentinos alrededor del mundo.  Gestionamos diversos documentos como partidas de nacimiento, matrimonio, defunción, Apostillas de la Haya Argentina, certificados de estado civil, legalizaciones y traducciones. </h5>
                        <Link to="/Conocenos" className="Btn">Conocenos</Link>
                    </div>
                    <div className="ContImg">
                        <img src={ofice} alt="" />
                    </div>
                </div>
            </div>
            <div className="Cont Tres">
                <h2>Clientes satisfechos</h2>
                <Link to="/Conocenos" className="Btn">Conocenos</Link>
            </div>
            <div className="Cont">
                <h2>Servicios que ofrecemos</h2>
                <div className="Cuatro">
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Apostillas</h4>
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Mediacion</h4>
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Legalizaciones</h4>
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Mediacion</h4>
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Copias o testimonios digitales</h4>
                    <h4><img src={check} alt="Doble-Check" className="Check"/>Testamentos</h4>
                </div>
                <Link to="/Servicios" className="Btn">Ver mas</Link>
            </div>
        </>
        );
    }

export {Inicio};
