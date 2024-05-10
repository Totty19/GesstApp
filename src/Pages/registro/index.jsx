import { Link } from 'react-router-dom';
import imagen from '../../Assets/Ofice.png'

const Registro = () => {
	return (
		<div className='Cont'>
			<h2>Creacion de Cuenta</h2>
			<div className="ContLog">
				<form action="" method="get" className="cajaLog">
					<h4>Inicia sesión para ingresar en tu cuenta profesional</h4>
					<label htmlFor="">ingrese su Nombre</label>
					<input
						className="inp"
						type="text"
						name="nombre"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su apellido</label>
					<input
						className="inp"
						type="text"
						name="apellido"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su email</label>
					<input
						className="inp"
						type="email"
						name="email"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su contraseña</label>
					<input
						className="inp"
						type="password"
						name="password"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">Repita su contraseña</label>
					<input
						className="inp"
						type="password"
						name="password"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su DNI</label>
					<input
						className="inp"
						type="number"
						name="DNI"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su Nº de celular</label>
					<input
						className="inp"
						type="number"
						name="Celular"
						required
						placeholder="ingrese aqui..."
					></input>
					<label htmlFor="">ingrese su lugar de trabajo</label>
					<input
						className="inp"
						type="text"
						name="Ubicacion"
						required
						placeholder="ingrese aqui..."
					></input>
					<input type="submit" value="Registrarse Como Usuario" className="Btn"></input>
					<Link className='Link' to='/login'>¿Ya tienes cuenta? <b>Inicia sesión</b></Link>
				</form>
				<div className='ContImg'>
					<img src={imagen} alt="Ofice" />
				</div>
			</div>
		</div>
	);
};

export { Registro };
