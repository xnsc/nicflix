import { ReactElement } from "react";
import { Container, Row, Col } from "react-bootstrap";
import nicflixLogo from "./images/nicflix-logo.png";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";

const Landing = (): ReactElement => {
	return (
		<Container
			fluid
			className="bg-dark text-light d-flex align-items-center justify-content-center vh-100"
		>
			<div className="main-content">
				<Row>
					<Col>
						<div className="icon-container text-center">
							<img src={nicflixLogo} alt="nicflix-logo" />
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="mt-2 text-center fs-5">Who's watching?</p>
					</Col>
				</Row>
				<Row>
					<Col className="text-center">
						<img
							src={cat1}
							alt="cat-through-fence"
							style={{ width: "175px", height: "175px" }}
						/>
						<p className="mt-2">Future Employers</p>
					</Col>
					<Col className="text-center">
						<img
							src={cat2}
							alt="cat-sleeping"
							style={{ width: "175px", height: "175px" }}
						/>
						<p className="mt-2">Friends & Fam</p>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Landing;
