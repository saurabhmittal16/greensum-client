import React, { Component } from "react";
import { Rating } from "semantic-ui-react";

class ReviewForm extends Component {
	state = {
		review: "",
		email: "",
		name: "",
		cantStore: false,
		value: 4,
	};

	saveDataHandler = () => {
		if (
			this.state.review.length === 0 ||
			this.state.name.length === 0 ||
			this.state.email.length === 0 ||
			this.state.value === 0
		) {
			this.setState({ cantStore: true });
			return;
		}
		console.log(this.state);
		this.setState({
			value: 0,
			name: "",
			review: "",
			email: "",
			cantStore: false,
		});
	};

	reviewEditHandler = event => {
		this.setState({
			review: event.target.value,
		});
	};

	nameEditHandler = event => {
		this.setState({
			name: event.target.value,
		});
	};

	emailEditHandler = event => {
		this.setState({
			email: event.target.value,
		});
	};

	closeEmpty = () => {
		this.setState({
			cantStore: false,
		});
	};

	handleRate = (e, { rating }) => this.setState({ value: rating });

	render() {
		let emptyFields = null;

		if (this.state.cantStore) {
			emptyFields = (
				<div id="empty-message">
					<p>
						Cant Store An Empty Review. Please fill out all the
						fields.
					</p>
					<button id="closeCantStore" onClick={this.closeEmpty}>
						Close
					</button>
				</div>
			);
		}

		return (
			<div id="container">
				<form
					id="review"
					onSubmit={e => {
						this.saveDataHandler();
						e.preventDefault();
					}}
				>
					<h2 id="intro">Add a review</h2>
					<fieldset>
						<div id="rating">
							<Rating
								maxRating={5}
								defaultRating={3}
								onRate={this.handleRate}
								clearable
							/>
						</div>
					</fieldset>
					<fieldset>
						<textarea
							placeholder="Type your review here..."
							id="text-input"
							value={this.state.review}
							onChange={this.reviewEditHandler}
							type="text"
						></textarea>
					</fieldset>
					<fieldset>
						<input
							type="name"
							placeholder="Your name"
							id="name-input"
							value={this.state.name}
							onChange={this.nameEditHandler}
						></input>
					</fieldset>
					<fieldset>
						<input
							id="email-input"
							placeholder="Your email"
							type="email"
							value={this.state.email}
							onChange={this.emailEditHandler}
						></input>
					</fieldset>
					<fieldset>
						<button
							id="review-submit"
							type="submit"
							data-submit="...Sending"
						>
							Submit
						</button>
					</fieldset>
					{emptyFields}
				</form>

				<style jsx>
					{`
						#container {
							max-width: 800px;
							width: 100%;
							margin: 0 auto;
							position: relative;
							align-items: center;
						}

						#closeCantStore {
							align-items: center;
							margin: auto;
							width: 10px;
							height: 15px;
						}

						#review {
							background: #f9f9f9;
							padding: 25px;
							margin: 150px 0;
							box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2),
								0 5px 5px 0 rgba(0, 0, 0, 0.24);
						}

						textarea,
						input {
							display: block;
						}

						#empty-message {
							margin: 5 px;
							padding: 3px;
							align-items: center;
						}

						fieldset {
							border: medium none !important;
							margin: 0 0 10px;
							min-width: 100%;
							padding: 0;
							width: 100%;
						}

						#review input[type="text"],
						#review input[type="email"],
						#review input[type="name"],
						#review textarea {
							width: 100%;
							border: 1px solid #ccc;
							background: #fff;
							margin: 0 0 5px;
							padding: 10px;
						}

						#review input[type="text"]:hover,
						#review input[type="email"]:hover,
						#review input[type="name"]:hover,
						#review textarea:hover {
							-webkit-transition: border-color 0.3s ease-in-out;
							-moz-transition: border-color 0.3s ease-in-out;
							transition: border-color 0.3s ease-in-out;
							border: 1px solid #aaa;
						}

						#review button[type="submit"] {
							cursor: pointer;
							width: 100%;
							border: none;
							background: #4caf50;
							color: #fff;
							margin: 0 0 5px;
							padding: 10px;
							font-size: 15px;
						}

						#review button[type="submit"]:hover {
							background: #43a047;
							-webkit-transition: background 0.3s ease-in-out;
							-moz-transition: background 0.3s ease-in-out;
							transition: background-color 0.3s ease-in-out;
						}

						#review button[type="submit"]:active {
							box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
						}
					`}
				</style>
			</div>
		);
	}
}

export default ReviewForm;
