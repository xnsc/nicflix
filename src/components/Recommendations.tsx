import { ReactElement } from "react";
import RecsNavbar from "./RecsNavbar";

const Recommendations = (): ReactElement => {
	return (
		<div className="bg-dark text-light min-h-screen">
			<RecsNavbar />
		</div>
	);
};

export default Recommendations;
