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
				{/*<Card.Meta>
    				<span className="date">Joined in 2015</span>
    			</Card.Meta>*/}
				<Card.Description>
					<Icon
						name="rupee sign"
						style={{ margin: "none", padding: "none" }}
					/>
					{price}
				</Card.Description>
				<a href={link} className="ui inverted primary button">
					About
				</a>
			</Card.Content>
			{/*<Card.Content extra>
    			<a>
    				<Icon name="user" />
    				22 Friends
    			</a>
    		</Card.Content>*/}
		</Card>
	);
};

export default CardExampleCard;
