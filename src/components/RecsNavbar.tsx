import { ReactElement } from "react";
import nicflixLogo from "./images/nicflix-logo-small.png";

const RecsNavbar = (): ReactElement => {
	return (
		<>
			<nav className="bg-dark p-4">
				<div className="flex items-center justify-between">
					<div className="icon-container text-center">
						<img className="h-8" src={nicflixLogo} alt="nicflix-logo" />
					</div>
					<div className="flex space-x-4">
						<a href="#home" className="text-light">
							Home
						</a>
						<a href="#shows" className="text-light">
							TV Shows
						</a>
						<a href="#movies" className="text-light">
							Movies
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default RecsNavbar;
