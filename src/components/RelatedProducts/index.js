import React from "react";
import { Container, Button } from "semantic-ui-react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";

import ProductCard from "./RelatedCard";

const TOTAL_SLIDES = 8;
const VISIBLE_SLIDES = 4;

// inspired from range function in Python
const range = num => [...Array(num).keys()];

const CustomCardSlide = ({ index, name, price, image }) => (
	<Slide index={index}>
		<ProductCard
			fluid
			name={name}
			price={price}
			image={image}
			style={{ minWidth: "200px", maxWidth: "400px" }}
		/>
	</Slide>
);

const RelatedProducts = () => (
	<div style={{ paddingTop: "64px" }}>
		<CarouselProvider
			visibleSlides={VISIBLE_SLIDES}
			naturalSlideWidth={1}
			naturalSlideHeight={1}
			totalSlides={TOTAL_SLIDES}
		>
			<Slider>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={0}
					name="Fruits"
					price={120}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={1}
					name="Vegetables"
					price={100}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={2}
					name="Fruits"
					price={120}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={3}
					name="Vegetables"
					price={100}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={4}
					name="Fruits"
					price={120}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={5}
					name="Vegetables"
					price={100}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={6}
					name="Fruits"
					price={120}
				/>
				<CustomCardSlide
					image="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612"
					index={7}
					name="Vegetables"
					price={100}
				/>
			</Slider>

			<Container textAlign="center">
				<Button.Group size="mini">
					{range(TOTAL_SLIDES).map(index => (
						<Button
							as={Dot}
							key={index}
							icon="circle"
							slide={index}
							style={{ background: "white" }}
						/>
					))}
				</Button.Group>
			</Container>
		</CarouselProvider>
	</div>
);

export default RelatedProducts;
