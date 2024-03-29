import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";

const ProductCard = (props) => {
	let { src, name, price } = props.data;

	return (
		<Grid.Column>
			<Card className="box">
				<Image className="img" src={src} />
				<Card.Description>
					<Card.Header className="textName">{name}</Card.Header>
					<Card.Meta className="textPrice">{price}</Card.Meta>
				</Card.Description>
			</Card>
		</Grid.Column>
	);
};
const product3X3grid = (props) => {
	let data = props["data"];
	return (
		<div>
			<Grid doubling relaxed="very" columns={3}>
				<Grid.Row>
					<ProductCard data={data[0]} />
					<ProductCard data={data[1]} />
					<ProductCard data={data[2]} />
				</Grid.Row>
				<Grid.Row>
					<ProductCard data={data[3]} />
					<ProductCard data={data[4]} />
					<ProductCard data={data[5]} />
				</Grid.Row>
				<Grid.Row>
					<ProductCard data={data[6]} />
					<ProductCard data={data[7]} />
					<ProductCard data={data[8]} />
				</Grid.Row>
			</Grid>
		</div>
	);
};
product3X3grid.defaultProps = {
	data: [
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
		{
			name: "Lorem Ipsum",
			price: "Rs 123",
			src: "https://i.picsum.photos/id/532/200/200.jpg",
		},
	],
};
// const textName={
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontWeight: '500',
//     lineHeight: '156.5%',
//     letterSpacing: '-0.03em',
//     justifyContent: 'center',
//     display: 'flex'

// };
// const textPrice={
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     alignItems: 'center',
//     letterSpacing: '-0.03em',
//     display: 'flex',
//     justifyContent: 'center',

// };
// const box={
//     background: '#DFEEFF',
//     borderRadius: '24px',
// };
// const img = {
//     paddingTop : '10%',
//     paddingLeft : '10%',
//     paddingRight : '10%',
//     borderRadius: '24px',
//     background: 'rgba(0,0,0,0)'
// }
export default product3X3grid;
