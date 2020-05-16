import React, { Component } from "react";

export default class CheckoutForm extends Component {
	render() {
		return (
			<div style={{ marginTop: "94px" }}>
				<div className="checkoutDiv">
					<div className="checkoutForm">
						<div className="checkoutContactInfo">
							<div className="checkoutInfo">
								Contact Information
							</div>
							<form className="insideForm1">
								<input
									placeholder="Email or Phone Number"
									name="email"
								/>
							</form>
						</div>
						<div className="checkoutShippingAdd">
							<div className="checkoutInfo">Shipping Address</div>
							<form className="insideForm2">
								<div className="name">
									<input
										placeholder="First Name"
										name="first"
									/>
									<input
										placeholder="Second Name"
										name="second"
									/>
								</div>
								<input placeholder="Address" name="address" />
								<input
									placeholder="Apartment, suite etc.. "
									name="apartment"
								/>
								<input placeholder="City" name="city" />
								<div className="address">
									<input placeholder="Region" name="region" />
									<input placeholder="State" name="state" />
									<input placeholder="Pin Code" name="pin" />
								</div>
							</form>
						</div>
					</div>

					<div className="checkoutPayment">
						<div
							className="checkoutInfo"
							style={{ marginBottom: "42px !important" }}
						>
							Payment Method
						</div>
						<div className="checkoutPaymentMethods">
							<div className="insideMethod" key={1}>
								<div className="icon">
									<i
										aria-hidden="true"
										className="credit card outline icon"
									></i>
								</div>
								<div className="typeof">Debit Card</div>
							</div>
							<div className="insideMethod" key={2}>
								<div className="icon">
									<i
										aria-hidden="true"
										className="credit card outline icon"
									></i>
								</div>
								<div className="typeof">Credit Card</div>
							</div>
							<div className="insideMethod" key={3}>
								<div className="Image">
									<img
										src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
										width="82px"
										height="37px"
									/>
								</div>
								<div className="typeof">UPI/BHIM</div>
							</div>
							<div className="insideMethod" key={4}>
								<div className="icon">
									<i
										aria-hidden="true"
										className="google wallet icon"
									></i>
								</div>
								<div className="typeof">Wallet</div>
							</div>
						</div>
					</div>
				</div>
				<div className="checkoutButton">
					<div className="shortLine"></div>
					<button>Place Order</button>
					<div className="shortLine"></div>
				</div>
			</div>
		);
	}
}
