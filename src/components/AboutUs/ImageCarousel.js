import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	Dot,
	ButtonNext,
} from "pure-react-carousel";
import React from "react";
import { Image, Button } from "semantic-ui-react";

const range = (num) => [...Array(num).keys()];

const TOTAL_SLIDES = 3;
const VISIBLE_SLIDES = 1;

const ImageCarousel = () => (
	<CarouselProvider
		naturalSlideWidth={4}
		naturalSlideHeight={3}
		totalSlides={3}
		style={{ margin: "3rem" }}
	>
		<Slider>
			<Slide index={0} style={{ minWidth: "650px" }}>
				<div className="about__slide">
					<Image size="big" src="/test-images/about-img.png" />
				</div>
			</Slide>

			<Slide index={1}>
				<div className="about__slide">
					<Image size="big" src="/test-images/about-img.png" />
				</div>
			</Slide>

			<Slide index={2}>
				<div className="about__slide">
					<Image size="big" src="/test-images/about-img.png" />
				</div>
			</Slide>
		</Slider>
		<div className="about__slide">
			<Button.Group size="mini">
				{range(TOTAL_SLIDES / VISIBLE_SLIDES).map((index) => (
					<Button
						as={Dot}
						key={index * VISIBLE_SLIDES}
						icon="circle"
						slide={index * VISIBLE_SLIDES}
						style={{ background: "white" }}
					/>
				))}
			</Button.Group>
		</div>
	</CarouselProvider>
);

export default ImageCarousel;
