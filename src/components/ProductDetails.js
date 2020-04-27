import React, { useState, useEffect } from "react";
import { Progress, Comment, Form, Rating } from "semantic-ui-react";

// Sample Props :

const description =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis, porttitor id metus et, efficitur viverra ligula. Donec fringilla eget purus ut placerat. Nam pharetra mauris non ornare semper.";

const additionalInfo = {
	weight: "100",
	dimensions: [200, 400, 200],
	title: "Cheese per 100gm",
	nutrition: [
		{
			name: "Protein",
			percent: 15,
		},
		{
			name: "Calories",
			percent: 36,
		},
		{
			name: "Fat",
			percent: 15,
		},
		{
			name: "Carbohydrate",
			percent: 44,
		},
	],
	facts: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis.",
		"I am Manan",
		"Jaaammmmmeeeee",
	],
};

const comments = [
	{
		avatar:
			"https://8682e824f6b7ffdb9ea0-e38cd3b884efbc2f850474b7fe806c09.ssl.cf3.rackcdn.com/4825_book_2059_77bb632c-563d-465c-ac99-b31a186c7dc6.jpg",
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
	{
		avatar:
			"https://8682e824f6b7ffdb9ea0-e38cd3b884efbc2f850474b7fe806c09.ssl.cf3.rackcdn.com/4825_book_2059_77bb632c-563d-465c-ac99-b31a186c7dc6.jpg",
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
	{
		avatar:
			"https://8682e824f6b7ffdb9ea0-e38cd3b884efbc2f850474b7fe806c09.ssl.cf3.rackcdn.com/4825_book_2059_77bb632c-563d-465c-ac99-b31a186c7dc6.jpg",
		author: "John Doe",
		date: "27 April 2019",
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero eget pulvinar vestibulum. Nulla egestas pellentesque molestie. Fusce neque turpis ",
	},
];

const Description = ({ description }) => {
	return <p>{description}</p>;
};

const NutrientInfo = ({ value }) => {
	return (
		<div className="nutrient-info-part">
			<div className="heading-Ni">
				<p>{value.name}</p>
			</div>
			<div className="progress-bars">
				<Progress percent={value.percent} color="green" size="tiny" />
			</div>
		</div>
	);
};

const Facts = ({ facts }) => {
	const [index, setIndex] = useState(0);

	// slideshow control
	useEffect(() => {
		const interval = setInterval(() => {
			if (index == facts.length - 1) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 6000);

		return () => clearInterval(interval);
	});

	return (
		<div className="facts">
			<p className="facts-header">Fun Fact</p>
			<p className="fact">{facts[index]}</p>
		</div>
	);
};

const AdditionalInfo = ({ weight, dimensions, title, nutrition, facts }) => {
	return (
		<div className="additional-info">
			<div className="left-bar-info">
				<p>Weight : {weight}gm</p>
				<p>
					Dimensions :
					{` ${dimensions[0]} x ${dimensions[1]} x ${dimensions[2]}`}
				</p>
				<p>{title}</p>
				<div className="nutrient-info">
					<ul>
						{nutrition.map((value) => (
							<li>
								<NutrientInfo value={value} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="fun-facts">
				<Facts facts={facts} />
			</div>
		</div>
	);
};

const Reviews = ({ comments }) => {
	return (
		<div className="comments">
			{comments.map((comment) => (
				<Comment>
					<Comment.Avatar src={comment.avatar} />
					<Comment.Content>
						<Comment.Author>{comment.author}</Comment.Author>
						<Comment.Metadata>
							<div>{comment.date}</div>
						</Comment.Metadata>
						<Comment.Text>
							<p>{comment.text}</p>
						</Comment.Text>
					</Comment.Content>
				</Comment>
			))}
			<div className="comment-form">
				<p>Add a review</p>
				<div class="rating-box">
					<p>Your Rating:</p>
					<Rating maxRating={5} size="huge" icon="star" clearable />
				</div>
				<p className="review-head">Your review*</p>
				<Form reply>
					<Form.TextArea />
					<button type="submit" className="comment-submit">
						Submit
					</button>
				</Form>
			</div>
		</div>
	);
};

export default ({ comments, additionalInfo, description }) => {
	const [showDescription, setShowDescription] = useState(true);
	const [showReviews, setShowReviews] = useState(false);
	const [showInfo, setShowInfo] = useState(false);

	const handleShowDescription = () => {
		setShowDescription(true);
		setShowReviews(false);
		setShowInfo(false);
	};

	const handleShowReviews = () => {
		setShowReviews(true);
		setShowDescription(false);
		setShowInfo(false);
	};

	const handleShowInfo = () => {
		setShowInfo(true);
		setShowReviews(false);
		setShowDescription(false);
	};

	return (
		<div className="product-details">
			<div className="product-details__nav">
				<ul>
					<li
						onClick={handleShowDescription}
						className={showDescription ? "active" : ""}
					>
						Description
					</li>
					<li
						onClick={handleShowInfo}
						className={showInfo ? "active" : ""}
					>
						Additional Information
					</li>
					<li
						onClick={handleShowReviews}
						className={showReviews ? "active" : ""}
					>
						Reviews({comments.length})
					</li>
				</ul>
			</div>
			<div className="product-details__wrapper">
				<div className="wrapper-content">
					{showDescription && (
						<Description description={description} />
					)}
					{showInfo && <AdditionalInfo {...additionalInfo} />}
					{showReviews && <Reviews comments={comments} />}
				</div>
			</div>
		</div>
	);
};
