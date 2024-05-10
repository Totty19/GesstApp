import { Inicio, Login, Registro, Conocenos , Verificacion, Servicios, Gestores, Contactanos, PerfilProf } from './Pages';
import { NavBar, Footer } from './Components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Registro" element={<Registro />} />
					<Route path="/Servicios" element={< Servicios/>} />
					<Route path="/Conocenos" element={< Conocenos/>} />
					<Route path="/Verificacion" element={< Verificacion/>} />
					<Route path="/Contactanos" element={< Contactanos/>} />

					{/* Usuario */}


					{/* Gestor */}

					<Route path="/Gestores" element={< Gestores/>} />
					<Route path="/PerfilProfecional" element={< PerfilProf/>} />

				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
