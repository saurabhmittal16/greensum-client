import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function useFormInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(e) {
		setValue(e.target.value);
	}

	return {
		value,
		onChange: handleChange,
	};
}

const AddReview = () => {
	const review = useFormInput("");
	const name = useFormInput("");
	const email = useFormInput("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(review, name, email);
	};

	return (
		<div style={{ marginTop: "2rem" }}>
			<Form onSubmit={handleSubmit}>
				<Form.Field label="Add a review" />
				<Form.TextArea
					required
					placeholder="Tell us more"
					label="Review"
					name="review"
					value={review.value}
					onChange={review.onChange}
				/>
				<Form.Group widths="equal">
					<Form.Input
						required
						placeholder="Name"
						label="Name"
						name="name"
						value={name.value}
						onChange={name.onChange}
					/>
					<Form.Input
						required
						placeholder="Email"
						label="Email"
						name="email"
						value={email.value}
						onChange={email.onChange}
					/>
				</Form.Group>
				<Form.Button content="Submit" />
			</Form>
		</div>
	);
};

export default AddReview;
