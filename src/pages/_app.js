import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import "semantic-ui-css/semantic.min.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../styles.css";
import "../styles/main.scss";
import { initStore } from "../redux";

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}),
			},
		};
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initStore, { debug: true })(MyApp);
