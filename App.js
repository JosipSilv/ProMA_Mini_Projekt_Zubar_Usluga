import 'react-native-gesture-handler';

import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { legacy_createStore, combineReducers } from 'redux';
import dentalReducer from './store/reducers/Dental';
const glavniReducer = combineReducers({ dental: dentalReducer });
const store = legacy_createStore(glavniReducer);
import { Provider } from 'react-redux'

import EkranHome from './screens/EkranHome';
import EkranUsluge from './screens/EkranUsluge';
import EkranProfil from './screens/EkranProfil';
import EkranPrijave from './screens/EkranPrijave';
import PrijavaDetalji from './screens/PrijavaDetalji';

export default function App() {
  const StackEkrani = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Homepage' component={TabsEkrani} options={{ headerShown: false }} />
        <Stack.Screen name='Usluge' component={EkranUsluge} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const StackPrijave = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Prijave' component={EkranPrijave} options={{ headerShown: false }} />
        <Stack.Screen name='PrijavaDetalji' component={PrijavaDetalji} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }

  const TabsEkrani = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#928DD4',
        }}>
        <Tab.Screen name='Naslovna' component={EkranHome} />
        <Tab.Screen name='Profil' component={EkranProfil} />
      </Tab.Navigator>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Zubar'>
          <Drawer.Screen name='Zubar' component={StackEkrani} options={{ drawerLabel: 'Home' }} />
          <Drawer.Screen name='Popis prijava' component={StackPrijave} options={{ unmountOnBlur: true }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
