import React from "react";
import { Rating, Item } from "semantic-ui-react";

const reviewItem = props => {
	let { name, date, text, profilePic, rating } = props;
	return (
		// for the time being I'm using a sample image 
			<Item>
				<Item.Image
					src="../../avatar.png"
                    size="tiny"
					style={{float:'left'}}
				/>

				<Item.Content>
					<Item.Header >{name}</Item.Header>
					<Item.Meta>
						<span className="date" style={{fontWeight: 200}}>{date.day} {date.month}. {date.year}</span>
						 <span className="ratings" style={{float:'right'}}>
							<Rating
								defaultRating={rating}
								maxRating={5}
								disabled
								style={{color:'green'}}
							/>
						</span> 
					</Item.Meta>
					<Item.Description>{text}</Item.Description>
				</Item.Content>
			</Item>

		
	);
};

export default reviewItem;
