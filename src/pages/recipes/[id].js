import data from "../../data.json";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import RecipiePage from "../../components/Recipies/RecipiePage";

const source = data;

const Recipies = () => {
	const router = useRouter();
	const id = router.query;
	const pageData = source.filter((recipe) => recipe.id == id.id);
	console.log(pageData);

	return (
		<Layout>
			<RecipiePage
				id={pageData[0].id}
				name={pageData[0].name}
				steps={pageData[0].steps}
				calories={pageData[0].calories}
				cook_time={pageData[0].cook_time}
				img_src={pageData[0].img_src}
				max_id={5}
			/>
		</Layout>
	);
};

export default Recipies;
