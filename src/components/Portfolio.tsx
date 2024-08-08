import { ReactElement } from "react";
import { Container } from "react-bootstrap";

const Portfolio = (): ReactElement => {
	return (
		<Container
			fluid
			className="bg-dark text-light d-flex align-items-center justify-content-center vh-100"
		>
			<div
				className="rounded p-4 shadow"
				style={{
					backgroundColor: "#faf2ed",
					maxWidth: "50vw",
					maxHeight: "75vh",
					width: "100%",
					height: "100%",
				}}
			>
				{/* Your content goes here */}
			</div>
		</Container>
	);
};

export default Portfolio;
