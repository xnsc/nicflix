import { ReactElement } from "react";
import psu_logo from "./images/psu-logo.png";

const EduRow = (): ReactElement => {
	return (
		<div>
			<h2 className="text-white fond-bold md:text-xl p-4">Education</h2>
			<div className="relative flex items-center">
				<div id={"slider"}>
					<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
						<img
							className="w-full h-auto block"
							src={psu_logo}
							alt="PSU logo"
						/>
						<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
							<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
								Portland State University
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EduRow;
