const Contactanos = () => {
    return (
        <div className="ContContacto">
            <h1>Contáctanos</h1>
            <form method="get" className="formContacto">
					<label htmlFor="get">Escribe tu nombre</label>
					<input
						className="inpC"
						type="text"
						name="nombre"
						required
						placeholder="Escriba aqui..."
					></input>
					<label htmlFor="get">Escribe tu email</label>
					<input
						className="inpC"
						type="email"
						name="email"
						required
						placeholder="Escriba aqui..."
					></input>
					<input type="submit" value="Contactar" className="Btn"></input>
				</form>
        </div>
    )
}

export { Contactanos }