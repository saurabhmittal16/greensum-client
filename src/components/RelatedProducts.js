import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const CarouselItem = ({ name, price, url }) => (
	<div className="slider-element">
		<img src={url} />
		<span className="slider__heading">{name}</span>
		<span className="slider__price">{price}</span>
	</div>
);

const Carousel = (props) => {
	const [page, setPage] = useState(0);
	const current = props.data;

	return (
		<div>
			<div
				style={{
					textAlign: "center",
					fontWeight: 600,
					fontSize: "35px",
					lineHeight: "52px",
					marginBottom: "20px",
				}}
			>
				Related Products
			</div>
			<SwitchTransition mode="out-in">
				<CSSTransition
					key={page === 0}
					addEndListener={(node, done) => {
						node.addEventListener("transitionend", done, false);
					}}
					classNames="fade"
				>
					<div className="slider-holder">
						{current.slice(page, page + 4).map((item, index) => {
							return (
								<div key={`item_${index}`}>
									<CarouselItem {...item} />
								</div>
							);
						})}
					</div>
				</CSSTransition>
			</SwitchTransition>
			<div className="slider-buttons">
				<div
					onClick={() => setPage(0)}
					className={
						page < 4 ? "active-slider-button" : "slider-button"
					}
				></div>
				<div
					onClick={() => setPage(4)}
					className={
						page >= 4 ? "active-slider-button" : "slider-button"
					}
				></div>
			</div>
		</div>
	);
};

Carousel.defaultProps = {
	data: [
		{
			name: "First",
			price: 1,
			url: "/images/related1.png",
		},
		{
			name: "Second",
			price: 2,
			url: "/images/related2.png",
		},
		{
			name: "Third",
			price: 3,
			url: "/images/related3.png",
		},
		{
			name: "Fourth",
			price: 4,
			url: "/images/related4.png",
		},
		{
			name: "Second",
			price: 5,
			url: "/images/related2.png",
		},
		{
			name: "Third",
			price: 6,
			url: "/images/related3.png",
		},
		{
			name: "First",
			price: 7,
			url: "/images/related1.png",
		},
		{
			name: "Fourth",
			price: 8,
			url: "/images/related4.png",
		},
		{
			name: "Fourth",
			price: 9,
			url: "/images/related4.png",
		},
		{
			name: "First",
			price: 10,
			url: "/images/related1.png",
		},
		{
			name: "Two",
			price: 11,
			url: "/images/related2.png",
		},
		{
			name: "Third",
			price: 12,
			url: "/images/related3.png",
		},
	],
};

export default Carousel;
