import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";
import App from "./App";
import { query } from "../src/utils/getQuery";

const client = new ApolloClient({
	uri: "https://twstg2.eu.saleor.cloud/graphql/",
	cache: new InMemoryCache(),
}); 

client
	.query({
		query: gql `${query}`,
	})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
	 <ApolloProvider client={client}>
		<App />
	 </ApolloProvider>
	</BrowserRouter>,
	// document.getElementById("root")
);
