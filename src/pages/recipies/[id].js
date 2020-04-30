import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import RecipiePage from "../../components/Recipies/RecipiePage";
import { Button } from "semantic-ui-react";

const Recipies = () => {
	const router = useRouter();
	const id = router.query;
	const rid = parseInt(id.id);
	return (
		<Layout>
			<RecipiePage
				id={rid}
				name={"Lorem Ipsum"}
				steps={[
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
						step_content:
							"Maecenas mollis erat quis tincidunt iaculis.",
					},
					{
						step_num: "5",
						step_content:
							"Morbi ultricies sem in augue commodo, ut cursus elit tincidunt.",
					},
				]}
				calories={300}
				cook_time={20}
				img_src={[
					"https://picsum.photos/id/237/250/250",
					"https://picsum.photos/id/238/250/250",
					"https://picsum.photos/id/239/250/250",
				]}
			/>
		</Layout>
	);
};

export default Recipies;
