import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = ({ name, image, price, link }) => {
	return (
		<Card style={{ boxShadow: "none !important" }} className="relateCard">
			<style jsx>{`
				.ui.card {
					box-shadow: "none";
				}
			`}</style>
			<Image
				src={image}
				wrapped
				ui={false}
				style={{ background: "none" }}
				className="relatedImage"
			/>
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
