import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ENVIRONMENT } from "../../../config/env";
import { getItem } from "../../../core/services/storage.services";
import type { TPropsWithChildren } from "../../../core/types/i";

const httpLink = createHttpLink({
  uri: ENVIRONMENT.GRAPHQL_BASE_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = getItem("access_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ApolloClientProvider: React.FC<TPropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
