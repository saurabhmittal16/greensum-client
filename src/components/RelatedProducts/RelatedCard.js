import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ name, image, price, link }) => {
	return (
		<Card style={{ boxShadow: "none !important" }} className="relateCard">
			<Image
				src={image}
				wrapped
				ui={false}
				style={{ background: "none" }}
				className="relatedImage"
			/>
			<style jsx>{`
				.ui.card {
					box-shadow: "none";
				}

				.relateCard :global(img.relatedImage) {
					//for all the images inside this card component
					border-radius: 20px !important;
				}
				.relateCard {
					box-shadow: none !important;
				}
			`}</style>
			<Card.Content textAlign="center">
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
