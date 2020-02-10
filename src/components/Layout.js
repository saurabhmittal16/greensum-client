import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
	return (
		<div>
			<Header />
			<div className="container main">{props.children}</div>
			
		</div>
	);
}