import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
	return (
		<div>
			<Header heading={props.heading} subHeading={props.subHeading} />
			<div className="container main">{props.children}</div>
			<Footer />
		</div>
	);
}
