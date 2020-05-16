import React, { Component } from "react";

export default class MyAccount extends Component {
	state = {
		name: "John Doe",
		paytm: 123,
		card1: "XXXX",
		card2: "XXXX",
		email: "johndoe@gmail.com",
		mobile: "+91-9875641234",
		address: "308 Nelson Street, Nestor Falls, Ontario 43142",
	};

	render() {
		const WalletInfo = ({ name, paytm, card1, card2 }) => {
			return (
				<div className="WalletInfo">
					<div>
						<img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-deep-sky-blue-solid-color-background.jpg" />
						<p>{name}</p>
					</div>
					<div className="hrLine"></div>
					<div>
						<p>My Wallet</p>
						<div>
							<div>
								<p className="head">Paytm</p>
								<p className="cash">{paytm}</p>
							</div>
							<div>
								<p className="head">card 1</p>
								<p className="cash">{card1}</p>
							</div>
							<div>
								<p className="head">Card 2</p>
								<p className="cash">{card2}</p>
							</div>
							<a href="/">Add a new payment method</a>
						</div>
					</div>
					<div className="hrLine"></div>
					<p>
						<a href="/">Change Password</a>
					</p>

					<p>
						<a href="/">Close your Account</a>
					</p>
				</div>
			);
		};

		const AllInfo = ({ name, email, mobile, address }) => {
			return (
				<div className="AllInfo">
					<a href="/">
						<i aria-hidden="true" className="edit outline icon"></i>
					</a>

					<section>
						<p className="Title">Personal Information</p>
						<p className="Info">{name}</p>
					</section>
					<section>
						<p className="Title">E-mail Address</p>
						<p className="Info">{email}</p>
					</section>
					<section>
						<p className="Title">Mobile Number</p>
						<p className="Info">{mobile}</p>
					</section>
					<section>
						<p className="Title">Shipping Address</p>
						<p className="Info">{address}</p>
					</section>
				</div>
			);
		};
		return (
			<div className="myAccount">
				<WalletInfo
					name={this.state.name}
					paytm={this.state.paytm}
					card1={this.state.card1}
					card2={this.state.card2}
				/>
				<AllInfo
					name={this.state.name}
					email={this.state.email}
					mobile={this.state.mobile}
					address={this.state.address}
				/>
			</div>
		);
	}
}
