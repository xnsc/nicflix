import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import RecsNavbar from "./RecsNavbar";

const Recommendations = (): ReactElement => {
	return (
		<Container fluid className="bg-dark text-light vh-100">
			<RecsNavbar />
		</Container>
	);
};

export default Recommendations;
