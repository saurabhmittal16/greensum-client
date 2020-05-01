import React from "react";
import { Container } from "semantic-ui-react";

export const NeverMissBar = () => {
	return (
		<Container fluid className="fluidContainer">
			<Container className="NotMissBar">
				<div>Never Miss Out on any Deal !</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
					}}
				>
					<input
						className="NeverMissEmail"
						type="text"
						name="Email"
						placeholder="Email"
					/>
					<button className="bellIcon">
						{" "}
						<svg
							width="23"
							height="30"
							viewBox="0 0 23 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.9048 23.7273H21.0833V12.1364C21.0833 7.32614 17.5135 3.35114 12.869 2.68977V1.36364C12.869 0.610227 12.2564 0 11.5 0C10.7436 0 10.131 0.610227 10.131 1.36364V2.68977C5.48646 3.35114 1.91667 7.32614 1.91667 12.1364V23.7273H1.09524C0.489434 23.7273 0 24.2148 0 24.8182V25.9091C0 26.0591 0.123214 26.1818 0.27381 26.1818H7.66667C7.66667 28.2886 9.38482 30 11.5 30C13.6152 30 15.3333 28.2886 15.3333 26.1818H22.7262C22.8768 26.1818 23 26.0591 23 25.9091V24.8182C23 24.2148 22.5106 23.7273 21.9048 23.7273ZM11.5 27.8182C10.593 27.8182 9.85714 27.0852 9.85714 26.1818H13.1429C13.1429 27.0852 12.407 27.8182 11.5 27.8182ZM4.38095 23.7273V12.1364C4.38095 10.2409 5.12024 8.46136 6.46533 7.12159C7.81042 5.78182 9.59702 5.04545 11.5 5.04545C13.403 5.04545 15.1896 5.78182 16.5347 7.12159C17.8798 8.46136 18.619 10.2409 18.619 12.1364V23.7273H4.38095Z"
								fill="#FACF37"
							/>
						</svg>
					</button>
				</div>
			</Container>
		</Container>
	);
};
