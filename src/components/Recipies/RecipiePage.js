import React, { useState, useRef, useEffect } from "react";
import RecipieStep from "./RecipieStep";
import Router from "next/router";
import Link from "next/link";
import { Button, Form } from "semantic-ui-react";
import SearchExampleStandard from "./RecipieSearch";

const RecipiePage = (props) => {
	const [fav, setFav] = useState(false);
	const topRef = useRef(null);

	const scrollToMid = () => {
		topRef.current.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(scrollToMid, []);
	const bat = fav ? (
		<i className="heart icon"></i>
	) : (
		<i className="heart outline icon"></i>
	);

	const val = props.steps.map((step) => {
		return (
			<div className="recipie-steps" key={"step_" + step.step_num}>
				<RecipieStep id={step.step_num} step_info={step.step_content} />
			</div>
		);
	});

	return (
		<div className="recipie-page">
			<div className="navigation">
				<div className="path">
					<Link href="/recipes">
						<a>All &nbsp;&nbsp;</a>
					</Link>
					>&nbsp;&nbsp;{props.name}
				</div>
				<div className="search-bar">
					<div className="search-form">
						<SearchExampleStandard />
					</div>
				</div>
			</div>
			<div className="top">
				<div className="heading" ref={topRef}>
					<h1 className="header-one">{props.name}</h1>
				</div>
				<div className="details">
					<div className="time-taken">
						<i className="clock outline icon"></i>
						{props.cook_time} minutes
					</div>
					<div className="calories">
						<i className="utensils icon"></i>
						{props.calories} calories
					</div>
				</div>
			</div>
			<div className="fav-button">
				<Button
					onClick={() => {
						fav === false ? setFav(true) : setFav(false);
					}}
				>
					{bat}
				</Button>
			</div>
			<div className="recipie-part">
				<div className="recipie-card">
					<div className="recipie-name">
						<h1 className="header-one">{props.name}</h1>
					</div>
					<div className="recipie-steps">{val}</div>
					<div className="recipie-end">
						<h2 className="header-two">Enjoy your meal :D</h2>
					</div>
				</div>

				<div className="recipie-image ">
					<img className="image" src={props.img_src[0]}></img>
				</div>
			</div>
			<div className="page-change">
				<div className="prev">
					<Button
						onClick={() => Router.push(`/recipies/${props.id - 1}`)}
						disabled={props.id < 2}
					>
						<i className="angle left icon"></i>
						PREV
					</Button>
				</div>
				<div className="next">
					<Button
						onClick={() =>
							Router.push(`/recipies/${parseInt(props.id) + 1}`)
						}
						disabled={parseInt(props.id) === props.max_id}
					>
						NEXT
						<i className="angle right icon"></i>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RecipiePage;
