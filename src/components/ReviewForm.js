import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

class ReviewForm extends Component {
	state = {
		review: "",
		email: "",
		name: "",
		cantStore: false,
		value: 4,
		hover: -1,
	};

	labels = {
		0.5: "Useless",
		1: "Useless+",
		1.5: "Poor",
		2: "Poor+",
		2.5: "Ok",
		3: "Ok+",
		3.5: "Good",
		4: "Good+",
		4.5: "Excellent",
		5: "Excellent+",
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

	render() {
		//   const classes = this.useStyles();

		let emptyFields = null;

		if (this.state.cantStore) {
			emptyFields = (
				<div>
					Cant Store An Empty Note
					<button id="closeCantStore" onClick={this.closeEmpty}>
						Close
					</button>
				</div>
			);
		}

		return (
			<div id="container">
				<form
					onSubmit={e => {
						this.saveDataHandler();
						e.preventDefault();
					}}
				>
					<div id="review-intro">Add a review</div>
					<div id="rating-text">Rating:</div>

					<div /*className={classes.root}*/ id="root">
						<Rating
							name="hover-feedback"
							value={this.state.value}
							precision={0.5}
							onChange={(event, newValue) => {
								this.setState({ value: newValue });
							}}
							onChangeActive={(event, newHover) => {
								this.setState({ hover: newHover });
							}}
						/>
						{this.state.value !== null && (
							<Box ml={2}>
								{
									this.labels[
										this.state.hover !== -1
											? this.state.hover
											: this.state.value
									]
								}
							</Box>
						)}
					</div>

					<div id="review-text"> Your review*</div>
					<textarea
						id="review-text-input"
						value={this.state.review}
						onChange={this.reviewEditHandler}
					></textarea>
					<div id="review-name">Name*</div>
					<input
						id="review-name-input"
						value={this.state.name}
						onChange={this.nameEditHandler}
					></input>
					<div id="review-email">Email*</div>
					<input
						id="review-email-input"
						type="email"
						value={this.state.email}
						onChange={this.emailEditHandler}
					></input>
					<button id="review-submit" type="submit">
						Submit
					</button>
				</form>
				<div>{emptyFields}</div>

				<style jsx>
					{`
						.root {
							width: 200;
							display: "flex";
						}
						div {
							display: block;
						}
						textarea,
						input {
							display: block;
						}
						.container {
							align-items: center;
						}
					`}
				</style>
			</div>
		);
	}
}

export default ReviewForm;
