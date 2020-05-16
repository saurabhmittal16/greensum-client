// Generated by greensum.pagedraw.json
import React from "react";
import { Form, Image, Checkbox, Icon } from "semantic-ui-react";

export default class Login_page extends React.Component {
	render() {
		return (
			<div className="login-page">
				<div className="login-page__image">
					<Image
						src="/images/Milk-carton-mockup.jpg"
						className="login-image"
						bordered
						fluid
					/>
				</div>
				<div className="login-page__form">
					<h2 className="form__header">Hello :D</h2>
					<Form
						className="form-layout"
						style={{
							margin: "0px",
						}}
					>
						<div>
							<Form.Field>
								<label className="form__label">Username</label>
								<Form.Input fluid placeholder="" />

								<label className="form__label">
									Email or Phone number
								</label>
								<Form.Input fluid placeholder="" />

								<label className="form__label">Password</label>
								<Form.Input fluid placeholder="" />

								<label className="form__label">
									Repeat Password
								</label>
								<Form.Input fluid placeholder="" />
							</Form.Field>
						</div>
						<button type="submit">
							<Icon
								name="arrow alternate circle right outline"
								size="big"
							/>
						</button>
					</Form>
					<div className="form__footer">
						<p>Already have an account?</p>
						<a href="/">Log In</a>
					</div>
				</div>
			</div>
		);
	}
}
