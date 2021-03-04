import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './src/componet/Detail';
import Product from './src/componet/Product';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';


const reducers = combineReducers({
  cart: require('./src/componet/redux/cart').reducer,
})
const Stack = createStackNavigator ();
const store = createStore(reducers);
class AppStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Trang chu" component = {Product} />
          <Stack.Screen name ="Thong tin chi tiet" component = {Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
)
