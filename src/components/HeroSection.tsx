import { ReactElement } from "react";
import test from "./images/test.jpg";
import PortfolioNavbar from "./PortfolioNavbar";

const HeroSection = (): ReactElement => {
	return (
		<div className="h-screen">
			<div
				style={{ backgroundImage: `url("${test}")` }}
				className="bg-cover bg-center bg-no-repeat h-5/6 relative"
			>
				<PortfolioNavbar />
				<div className="absolute bottom-0 left-0 px-8 py-14 md:py-28">
					<h1 className="text-light text-3xl md:text-5xl font-bold md:font-black">
						Hi, my name is Nicole!
					</h1>
					<p className="text-light text-lg md:text-2xl font-normal mt-3">
						Welcome to my portfolio
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
