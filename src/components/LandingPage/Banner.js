import React from "react";
import { Segment, Grid, Button } from "semantic-ui-react";


export default function Banner() {
	return (
		<Segment basic  style={{
            width:"100%",
            marginTop:"5em",
            marginBottom:"10em",
        }}>
			<Grid stackable>
				<Grid.Row columns="2" style={{
                    height:"100%"
                }}>
				<Grid.Column>
					<img src="./landing-page/ecoFriendly.png" />
				</Grid.Column>
				<Grid.Column style={{
                    // border:"solid red",
                    // paddingRight:"8em",
                    paddingLeft:"14em"
                }}>
					<div>
						<h1 style={heading}>Be <br/> Wholesome.</h1>
						<p style={{
                            color: "rgba(51, 51, 51, 0.8)",
                            lineHeight:"1.7rem",
                            fontSize:"1.2rem",
                        }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt....
						</p>
                        <Button style={btn}>
                            Button
                        </Button>
					</div>
				</Grid.Column>
				</Grid.Row>
			</Grid>
        </Segment>
	);
}

const heading = {
	fontWeight: "bold",
    color: "#046B2D",
    fontSize:"3.5rem",
    lineHeight:"4.37rem"
};

const btn = {
	boxShadow: " 5px 5px 25px rgba(4, 107, 45, 0.2)",
    background: "#046B2D",
    color:"white",
    padding:"1em 4em"
};