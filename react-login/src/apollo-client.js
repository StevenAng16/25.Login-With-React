import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://nice-jay-24.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret" : 
            "QchsgVIiFbztsTAHwnBi0GaVsdB1oyThpDHlaAjdpbMv4f4p00jZklL8pXl9JI26",
    },
    cache: new InMemoryCache(),
});

export default client;