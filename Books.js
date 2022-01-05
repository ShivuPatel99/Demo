import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BooksScreen from './BooksScreen';
import BookDetailScreen from './BookDetailScreen';
import AddBookScreen from './AddBookScreen';
import EditBookScreen from './EditBookScreen';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// const MainNavigator = createStackNavigator({
//   Book: { screen: BooksScreen },
//   BookDetails: { screen: BookDetailScreen },
//   AddBook: { screen: AddBookScreen },
//   EditBook: { screen: EditBookScreen },
// });
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://192.168.0.7:3000/graphql',
  }),
});

// const MyRootComponent = createAppContainer(MainNavigator);

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator   >
        <Stack.Screen name="BooksScreen" component={BooksScreen} />
        <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="EditBookScreen" component={EditBookScreen} />
      </Stack.Navigator>
      {/* <Drawer.Navigator initialRouteName="BooksScreen"  >
        <Drawer.Screen name="BooksScreen" component={BooksScreen} />
        <Drawer.Screen name="BookDetailScreen" component={BookDetailScreen} />
        <Drawer.Screen name="AddBookScreen" component={AddBookScreen} />
        <Drawer.Screen name="AddBookScreen" component={AddBookScreen} />
      </Drawer.Navigator> */}
      </NavigationContainer>
    {/* <MyRootComponent /> */}
  </ApolloProvider>
);

AppRegistry.registerComponent('MyApp', () => App);

export default App;