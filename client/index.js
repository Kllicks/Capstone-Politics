import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
//react apollo exports several diff props one of which is apollo provider - why curly braces
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';

const client = new ApolloClient({
  //identify every record that comes back from the server so apollo can identify information that already pulled from server and store in a local cache.
  //every record that we fetch from our back end will be ran through this function and identify it by returning the records ID. 
  //assumption here is that every single record comes back from back end will have an id property defined on it. 
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        {/* always going to be displayed on the screen at all times */}
        {/* always going to show the header and then it will show any nested component inside of it as well */}
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
