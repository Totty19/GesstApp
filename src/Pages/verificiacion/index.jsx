const Verificacion = () => {
    return (
        <main className="contVerif">
            <h1>Verificación</h1>
            <h4>Se envió un código a tu celular.</h4>
            <form method="get">
                <input className="inpVerf"
                    type="password"
                    name="codigo"
                    required
                    placeholder="**************"
                />
                <h4>¿Problemas? <b>Re enviar código</b></h4>
                <input type="submit" value="Continuar" className="Btn"/>
            </form>
        </main>
    )
}

export { Verificacion }