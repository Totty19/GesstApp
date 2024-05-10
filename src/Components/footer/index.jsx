import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<h3>¡Estamos aquí para ayudarte!</h3>
			<h5>Brindando soluciones documentarias a argentinos y argentinas alrededor del mundo.</h5>
			<Link to="/Contactanos" className="Fot">Contactanos</Link>
			<div className="contFooter">
				<h5>Realizada por © Tomas Gil Aguiar - Trámites Argentinos a Distancia 2024. Todos los derechos reservados.</h5>
				<h5>+11 11-1111-1111 | info@tramitesargentinosadistancia.com | Terminos y Condiciones | Políticas de privacidad</h5>
			</div>
		</footer>
	);
};

export { Footer };
