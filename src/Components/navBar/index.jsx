import { Link } from 'react-router-dom';
import  Gess  from '../../Assets/Gess.png';
import  Users  from '../../Assets/User.png';
import  vector  from '../../Assets/Vector.png';

const NavBar = () => (
	<nav className="NvBar">
		<div className="ContTit">
			<img src={Gess} alt="logo" className='Gess'/>
			<Link className="link TIT" to="/">Gess</Link>
		</div>
		<img src={vector} alt="Bars" className='bars'/>
		<div className="ContLinks">
			<Link className="link" to="/">
				Home
			</Link>
			<Link className="link" to="/conocenos">
				Conocenos
			</Link>
			<Link className="link" to="/registro">
				Clientes
			</Link>
			<Link className="link" to="/servicios">
				Servicios
			</Link>
			<Link className="link" to="/contactanos">
				Contactanos
			</Link>
		</div>
		<img src={Users} alt="users" className='Users'/>
	</nav>
);

export { NavBar };
