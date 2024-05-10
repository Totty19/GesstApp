import per1 from "../../Assets/per1.png"
import per2 from "../../Assets/Per2.png"
import per3 from "../../Assets/per3.png"

const Gestores = () => {
    return (
        <div className="ContGes">
            <header className="serHeader">
                <input type="search" name="" id="" placeholder="Buscar aqui.." />
                <h1>Profesionales <b>Destacados</b></h1>
                <div className="contProf">
                    <div className="Prof">
                        <img src={per1} alt="" />
                        <h4>Federica Antognini</h4>
                        <h5>Abogado</h5>
                    </div>
                    <div className="Prof">
                        <img src={per2} alt="" />
                        <h4>Federica Antognini</h4>
                        <h5>Abogado</h5>
                    </div>
                    <div className="Prof">
                        <img src={per3} alt="" />
                        <h4>Federica Antognini</h4>
                        <h5>Abogado</h5>
                    </div>
                </div>
            </header>

            <main className="Cont">
                <h2>Nuestros servicios</h2>
                <div className="Cuatro">
                    <h4>Apostillas</h4>
                    <h4>Mediación</h4>
                    <h4>Legalizaciones</h4>
                    <h4>Nomina</h4>
                    <h4>Copias o testimonios digitales</h4>
                    <h4>Testamentos</h4>
                    <h4>Copias de firmas digitales</h4>
                    <h4>Copias de firmas en documentos digitales</h4>
                </div>
            </main>


        </div>
    )
}

export { Gestores };