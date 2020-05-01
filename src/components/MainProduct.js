import React, { useState } from "react";
import { Image, Rating, Icon, Form, Button } from "semantic-ui-react";

const mockImages = [
	"https://images.unsplash.com/photo-1558221693-89a565d7ecd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
	"https://images.unsplash.com/photo-1516100970402-530cfdf696d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
	"https://cdn0.weddingwire.com/emp/fotos/4/8/3/9/0/0/markus-spiske-gm0zvw3pzy-unsplash_51_9384-1569456136.jpg",
	"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
];

// Product rating and number or reviews
const ProductRating = ({ rating = 3, max = 5, numberOfReviews }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Rating
				maxRating={max}
				defaultRating={rating}
				icon="star"
				size="small"
				disabled
			/>
			<p
				style={{
					fontSize: "1rem",
					marginLeft: "2rem",
				}}
			>
				({numberOfReviews} customer{" "}
				{numberOfReviews === 1 ? "review" : "reviews"})
			</p>
		</div>
	);
};

// Product price
const ProductPrice = ({ price }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				marginTop: "3rem",
			}}
		>
			<Icon name="rupee sign" size="large" />
			<h1
				style={{
					marginTop: "1rem",
					fontSize: "2.8rem",
					fontWeight: "800",
				}}
			>
				{price}
			</h1>
		</div>
	);
};

// Product description
const ProductDescription = ({ description }) => {
	return (
		<div className="product-header">
			<p>{description}</p>
		</div>
	);
};

// Product buy data
const ProductCheckout = ({ maxItems = 7 }) => {
	// creates state for handling dynamic item number change
	const [items, setItems] = useState(1);

	return (
		// The full form
		<div
			style={{
				marginTop: "3rem",
			}}
		>
			<Form>
				<div
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Form.Field>
						<input
							type="text"
							value={items}
							style={{
								width: "3rem",
								textAlign: "center",
								color: "#000000",
								opacity: "1",
								border: "none",
								marginTop: "1rem",
							}}
							disabled
						/>
					</Form.Field>
					{/* Increment decrement Buttons */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							overflowY: "hidden",
						}}
					>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								color: "#276b2e",
							}}
							onClick={() => {
								let check = items + 1;
								if (check <= maxItems) {
									setItems(check);
								}
							}}
						>
							<Icon name="angle up" size="large" />
						</button>
						<button
							style={{
								backgroundColor: "transparent",
								border: "none",
								color: "#276b2e",
							}}
							onClick={() => {
								let check = items - 1;
								if (check >= 1) {
									setItems(check);
								}
							}}
						>
							<Icon name="angle down" size="large" />
						</button>
					</div>
					{/* Add to cart button */}
					<div
						style={{
							marginLeft: "2rem",
						}}
					>
						<button
							style={{
								backgroundColor: "#276b2e",
								color: "#fff",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								border: "none",
								width: "9.1rem",
								fontSize: "1.1rem",
								padding: "0.7rem",
							}}
						>
							Add To Cart
						</button>
					</div>
					{/* Heart/Favorites Button */}
					<div>
						<button
							style={{
								backgroundColor: "transparent",
								color: "#f44336",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								border: "none",
								padding: "0.6rem",
								marginLeft: "2rem",
								boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.2)",
							}}
						>
							<Icon name="heart outline" size="large" />
						</button>
					</div>
				</div>
			</Form>
		</div>
	);
};

const ProductUtilities = ({ category, tags }) => {
	return (
		<div style={{ marginTop: "3rem" }}>
			{/* Category */}
			<div style={{ display: "flex", alignItems: "baseline" }}>
				<h2 style={{ fontSize: "1rem", marginRight: "0.8rem" }}>
					Category:{" "}
				</h2>
				<p>{category}</p>
			</div>

			{/* Tags from an array */}
			<div style={{ display: "flex", alignItems: "baseline" }}>
				<h2 style={{ fontSize: "1rem", marginRight: "0.8rem" }}>
					Tag:{" "}
				</h2>
				<div style={{ display: "flex" }}>
					{tags.map((tag) => (
						<p key={tag} style={{ padding: "0.3rem" }}>
							{tag}
						</p>
					))}
				</div>
			</div>

			{/* Sharing icons */}
			<div style={{ display: "flex", alignItems: "baseline" }}>
				<h2 style={{ fontSize: "1rem", marginRight: "0.8rem" }}>
					Share:{" "}
				</h2>
				<div style={{ display: "flex" }}>
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							marginRight: "1rem",
						}}
					>
						<Icon name="whatsapp" size="large" />
					</button>
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							marginRight: "1rem",
						}}
					>
						<Icon name="talk" size="large" />
					</button>
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							marginRight: "1rem",
						}}
					>
						<Icon name="mail outline" size="large" />
					</button>
					<button
						style={{
							backgroundColor: "transparent",
							border: "none",
							marginRight: "1rem",
						}}
					>
						<Icon name="facebook" size="large" />
					</button>
				</div>
			</div>
		</div>
	);
};

const ImageSlider = ({ images }) => {
	let index = 0;

	const [currentIndex, setCurrentIndex] = useState(0);
	// console.log(images[currentIndex]);

	const slideLeft = () => {
		if (!currentIndex) {
			let newIndex = images.length - 1;
			setCurrentIndex(newIndex);
		} else {
			let newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
		}
	};

	const slideRight = () => {
		if (currentIndex == images.length - 1) {
			let newIndex = 0;
			setCurrentIndex(newIndex);
		} else {
			let newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
		}
	};

	const handleImageSelection = (index) => {
		setCurrentIndex(index);
	};

	return (
		<div className="main-product__slider">
			<div className="slider-image-area">
				<button className="scroll-button" onClick={slideLeft}>
					<Icon name="angle left" />
				</button>
				<div className="slider-image">
					<img src={images[currentIndex]} />
				</div>
				<button className="scroll-button" onClick={slideRight}>
					<Icon name="angle right" />
				</button>
			</div>
			<div className="slider-others">
				{images.map((image, index) => (
					<img
						id={`image_${index}`}
						src={image}
						onClick={() => handleImageSelection(index)}
					/>
				))}
			</div>
		</div>
	);
};

// Final MainProduct component
export default () => {
	return (
		<div
			style={{
				display: "flex",
			}}
			className="main-product"
		>
			<ImageSlider images={mockImages} />
			<div
				style={{
					flex: 1,
					marginLeft: "2rem",
				}}
			>
				<h1>Cheese Block</h1>
				<ProductRating numberOfReviews={6} />
				<ProductPrice price={150} />
				<ProductDescription
					description={
						"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem at velit totam natus placeat consequatur. Et magni soluta nostrum voluptatibus voluptatem explicabo adipisci? Non, modi harum? Magni, eius repudiandae omnis similique dignissimos"
					}
				/>
				<ProductCheckout />
				<ProductUtilities tags={["Food", "Cheese"]} category="Food" />
			</div>
		</div>
	);
};
