import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ name, image, price, link }) => {
	return (
		<Card
			style={{ boxShadow: "none", border: "none" }}
			className="relateCard"
		>
			<Image
				src={image}
				wrapped
				ui={false}
				style={{ width: "95%" }}
				className="relatedImage"
			/>
			<style jsx>{`
				.ui.card {
					box-shadow: "none";
				}

				.relateCard :global(img.relatedImage) {
					//for all the images inside this card component
					// border-radius: 20px !important;
				}
			`}</style>
			<Card.Content style={{ textAlign: "center", width: "95%" }}>
				<Card.Header>{name}</Card.Header>
				<Card.Description>
					<Icon
						name="rupee sign"
						style={{ margin: "none", padding: "none" }}
					/>
					{price}
				</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default CardExampleCard;
