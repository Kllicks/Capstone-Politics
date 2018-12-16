import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
//react apollo exports several diff props one of which is apollo provider - why curly braces
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  //identify every record that comes back from the server so apollo can identify information that already pulled from server and store in a local cache.
  //every record that we fetch from our back end will be ran through this function and identify it by returning the records ID. 
  //assumption here is that every single record comes back from back end will have an id property defined on it. 
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
