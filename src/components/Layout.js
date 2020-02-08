import Header from "./Header";

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div className="container main">{props.children}</div>
		</div>
	);
}
