import Header from "./Header";
import Related from "./Related";

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div className="container main">{props.children}</div>

			<Related />
		</div>
	);
}
