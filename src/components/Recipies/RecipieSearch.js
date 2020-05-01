import Router from "next/router";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Search, Grid, Label } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/, "\\$&");

//============================================Data(ignore this part)=================================================
const source = [
	{
		id: "1",
		name: "Lorem Ipsum 1",
		steps: [
			{
				step_num: "1",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			},
			{
				step_num: "2",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			},
			{
				step_num: "3",
				step_content:
					"Sed tempor est et dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			},
			{
				step_num: "4",
				step_content: "Maecenas mollis erat quis tincidunt iaculis.",
			},
			{
				step_num: "5",
				step_content:
					"Morbi ultricies sem in augue commodo, ut cursus elit tincidunt.",
			},
		],
		calories: "300",
		cook_time: "20",
		img_src: [
			"https://picsum.photos/id/237/250/250",
			"https://picsum.photos/id/238/250/250",
			"https://picsum.photos/id/239/250/250",
		],
	},
	{
		id: "2",
		name: "Loref Ipsum 2",
		steps: [
			{
				step_num: "1",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			},
			{
				step_num: "2",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			},
			{
				step_num: "3",
				step_content:
					"Sed tempor est et dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			},
			{
				step_num: "4",
				step_content: "Maecenas mollis erat quis tincidunt iaculis.",
			},
			{
				step_num: "5",
				step_content:
					"Morbi ultricies sem in augue commodo, ut cursus elit tincidunt.",
			},
		],
		calories: "400",
		cook_time: "30",
		img_src: [
			"https://picsum.photos/id/237/250/250",
			"https://picsum.photos/id/238/250/250",
			"https://picsum.photos/id/239/250/250",
		],
	},
	{
		id: "3",
		name: "Torem Ipsum 3",
		steps: [
			{
				step_num: "1",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
			},
			{
				step_num: "2",
				step_content:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			},
			{
				step_num: "3",
				step_content:
					"Sed tempor est et dictum consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			},
			{
				step_num: "4",
				step_content: "Maecenas mollis erat quis tincidunt iaculis.",
			},
			{
				step_num: "5",
				step_content:
					"Morbi ultricies sem in augue commodo, ut cursus elit tincidunt.",
			},
		],
		calories: "500",
		cook_time: "10",
		img_src: [
			"https://picsum.photos/id/237/250/250",
			"https://picsum.photos/id/238/250/250",
			"https://picsum.photos/id/239/250/250",
		],
	},
];

const resultRenderer = ({ name }) => <Label content={name} />;

resultRenderer.propTypes = {
	name: PropTypes.string,
};

export default class SearchExampleStandard extends Component {
	state = initialState;

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.name });
		const { pathname } = Router;
		return Router.push(`/recipies/${result.id}`);
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.setState(initialState);

			const re = new RegExp(escapeRegExp(this.state.value), "i");
			const isMatch = (result) => re.test(result.name);

			this.setState({
				isLoading: false,
				results: source.filter(isMatch),
			});
		}, 300);
	};

	render() {
		const { isLoading, value, results } = this.state;

		return (
			<Grid>
				<Grid.Column width={6}>
					<Search
						loading={isLoading}
						onResultSelect={this.handleResultSelect}
						onSearchChange={this.handleSearchChange}
						results={results}
						value={value}
						resultRenderer={resultRenderer}
						{...this.props}
					/>
				</Grid.Column>
			</Grid>
		);
	}
}
