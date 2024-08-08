import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import nicflixLogo from "./images/nicflix-logo.png";
import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";

const Landing = (): ReactElement => {
	const navigate = useNavigate();

	const navToPortfolio = () => {
		navigate("/nicflix/portfolio");
	};

	const navToRecommendations = () => {
		navigate("/nicflix/browse");
	};

	return (
		<div className="bg-dark text-light flex items-center justify-center min-h-screen">
			<div className="main-content text-center">
				<div className="flex justify-center">
					<div className="icon-container">
						<img src={nicflixLogo} alt="nicflix-logo" />
					</div>
				</div>
				<div className="mt-4">
					<p className="text-center text-lg">Who's watching?</p>
				</div>
				<div className="flex justify-center mt-4">
					<div className="text-center mx-4">
						<img
							className="rounded"
							src={cat1}
							alt="cat-through-fence"
							style={{ width: "175px", height: "175px", cursor: "pointer" }}
							onClick={navToPortfolio}
						/>
						<p className="mt-2">Future Employers</p>
					</div>
					<div className="text-center mx-4">
						<img
							className="rounded"
							src={cat2}
							alt="cat-sleeping"
							style={{ width: "175px", height: "175px", cursor: "pointer" }}
							onClick={navToRecommendations}
						/>
						<p className="mt-2">Friends & Fam</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
