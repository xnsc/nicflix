import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nicflixLogo from "./images/nicflix-logo-small.png";

const RecsNavbar = (): ReactElement => {
	return (
		<>
			<Navbar className="p-4" bg="dark" data-bs-theme="dark">
				<Navbar.Brand>
					<div className="icon-container text-center">
						<img className="img-fluid" src={nicflixLogo} alt="nicflix-logo" />
					</div>
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#shows">TV Shows</Nav.Link>
					<Nav.Link href="#movies">Movies</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};

export default RecsNavbar;
