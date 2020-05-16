const fs = require("fs");

String.prototype.toTitleCase = function () {
	text = this;
	first = text[0];
	rest = text.slice(1);
	return first.toUpperCase() + rest;
};

const files = [
	"shop",
	"about",
	"contact",
	"support",
	"account",
	"cart",
	"search",
	"playground",
];

files.forEach((file) => {
	fs.writeFileSync(
		`../pages/${file}.js`,
		`import React from "react";
import Layout from "../components/Layout";

const ${file.toTitleCase()} = () => {
	return (
		<Layout>
			<h1>Hello From ${file}</h1>
		</Layout>
	);
};

export default ${file.toTitleCase()};
	`,
		function (err) {
			console.log(err);
		}
	);
});
