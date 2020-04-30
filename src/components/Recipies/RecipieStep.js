import React from "react";

const RecipieStep = (props) => {
	return (
		<div className="recipe-step">
			<div className="step-num">{props.id}</div>
			<div className="step-info">{props.step_info}</div>
		</div>
	);
};
export default RecipieStep;
