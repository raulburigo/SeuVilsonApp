import React from 'react';

import {ApolloProvider} from '@apollo/client';
import {client} from './src/apollo';

import CustomThemeProvider from './src/theme/context';
import Feed from './src/screens/Feed';

function App() {
  return (
    <ApolloProvider client={client}>
      <CustomThemeProvider>
        <Feed />
      </CustomThemeProvider>
    </ApolloProvider>
  );
}

export default App;
