import React, { useState, useRef, useEffect } from "react";
import { Form } from "semantic-ui-react";

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChange,
	};
};

const ContactUs = () => {
	const name = useFormInput("");
	const email = useFormInput("");
	const message = useFormInput("");
	const topRef = useRef(null);

	// const scrollToMid = () => {
	// 	topRef.current.scrollIntoView({ behavior: "smooth" });
	// };

	// useEffect(scrollToMid, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, message);
	};

	return (
		<div className="contact-us">
			<div ref={topRef} />
			<div className="contact-us__form">
				<h2 className="form-header">We'd Love To Hear From You :)</h2>
				<Form onSubmit={handleSubmit} className="form">
					<Form.Field>
						<h3>
							<label className="form__label">Name</label>
						</h3>
						<Form.Input
							className="form-input"
							fluid
							required
							name="name"
							value={name.value}
							onChange={name.onChange}
							placeholder=""
						/>
						<h3>
							<label className="form__label">Email</label>
						</h3>
						<Form.Input
							className="form-input"
							fluid
							required
							name="email"
							type="email"
							value={email.value}
							onChange={email.onChange}
							placeholder=""
						/>

						<h3>
							<label className="form__label">Message</label>
						</h3>
						<Form.TextArea
							className="form-input"
							fluid
							required
							name="message"
							value={message.value}
							onChange={message.onChange}
							placeholder=""
						/>
					</Form.Field>
					<Form.Button
						className="form-submit"
						content="Submit"
					></Form.Button>
				</Form>
			</div>
			<div className="contact-us__info">
				<div className="contact-us__email">
					<h2 className="info-header"> Connect with us: </h2>
					<p className="info-para">
						For support or any questions, email us at:{" "}
						<span>
							<a>abcd@gmail.com</a>
						</span>
					</p>
				</div>
				<div className="contact-us__number">
					<h2 className="info-header"> Call Us:</h2>
					<p className="info-para">+91-123456789</p>
					<p className="info-para">1800-2471-2456</p>
				</div>
				<div className="contact-us__landmark">
					<h2 className="info-header">Landmark:</h2>
					<p className="info-para">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
