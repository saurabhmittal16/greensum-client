import Router from "next/router";
import data from "../../data.json";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Search, Grid, Label } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/, "\\$&");

const source = data;

const resultRenderer = ({ name }) => <Label content={name} />;

resultRenderer.propTypes = {
	name: PropTypes.string,
};

export default class SearchExampleStandard extends Component {
	state = initialState;

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.name });
		const { pathname } = Router;
		return Router.push(`/recipes/${result.id}`);
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
