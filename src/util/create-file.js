const fs = require("fs");

const files = [
	"shop",
	"about",
	"contact",
	"support",
	"account",
	"cart",
	"search",
];

files.forEach(file => {
	fs.writeFileSync(
		`../pages/${file}.js`,
		`import React from "react";
import Layout from "../components/Layout";

const ${file} = () => {
	return (
		<Layout>
			<h1>Hello From ${file}</h1>
		</Layout>
	);
};

export default ${file};
	`,
		function(err) {
			console.log(err);
		}
	);
});
