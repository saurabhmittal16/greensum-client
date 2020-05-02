import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function index() {
	return (
		<div className="about__container">
			<span>Our Goals</span>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</p>
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<p>
				<strong>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</strong>
			</p>
			<ImageCarousel className="about__carousel" />
		</div>
	);
}
