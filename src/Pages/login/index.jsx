import {Link} from 'react-router-dom'
import imagen from '../../Assets/Ofice.png'

const Login = () => {
	return (
		<div className="Cont">
			<h2>Iniciar sesión</h2>
			<div className="ContLog">
				<form method="get" className="cajaLog">
					<h4>Inicia sesión para ingresar en tu cuenta profesional</h4>
					<label htmlFor="get">Escribe tu usuario</label>
					<input
						className="inp"
						type="text"
						name="nombre"
						required
						placeholder="Escriba aqui..."
					></input>
					<label htmlFor="get">Escribe tu contraseña</label>
					<input
						className="inp"
						type="password"
						name="contraseña"
						required
						placeholder="Escriba aqui..."
					></input>

					<input type="submit" value="Iniciar sesión" className="Btn"></input>

					<Link className='Link' to='/Registro'>¿No tienes cuenta? <b>Registrate</b></Link>
				</form>

				<div className='ContImg'>
					<img src={imagen} alt="Ofice" />
				</div>
			</div>
		</div>
	);
};

export { Login };
