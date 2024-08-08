import { ReactElement } from "react";
import test from "./images/test.jpg";
import PortfolioNavbar from "./PortfolioNavbar";

const HeroSection = (): ReactElement => {
	return (
		<div className="h-screen">
			<div
				style={{ backgroundImage: `url("${test}")` }}
				className="bg-cover bg-center bg-no-repeat h-5/6"
			>
				<PortfolioNavbar />
				<div className="px-8 py-14 md:py-28">
					<h1 className="text-dark text-3xl md:text-5xl font-bold md:font-black">
						Testing the header!!!!
					</h1>
					<p className="text-dark text-lg md:text-2xl font-normal mt-4">
						Testing the sub header
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
