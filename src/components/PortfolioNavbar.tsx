import { ReactElement } from "react";
import nicflixLogo from "./images/nicflix-logo-small.png";

const PortfolioNavbar = (): ReactElement => {
	return (
		<header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
			<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
				<img src={nicflixLogo} alt="nicflix-logo" className="w-30" />
				<nav className="p-2 sm:p-4">
					<div className="flex flex-wrap space-x-4 sm:space-x-6">
						<a href="#home" className="text-dark no-underline">
							Home
						</a>
						<a href="#edu" className="text-dark no-underline">
							Education
						</a>
						<a href="#exp" className="text-dark no-underline">
							Experience
						</a>
						<a href="#skills" className="text-dark no-underline">
							Skills
						</a>
						<a href="#projects" className="text-dark no-underline">
							Projects
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default PortfolioNavbar;
