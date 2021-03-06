import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../pages/Profile';

const option = {
  drawerActiveBackgroundColor: '#000000',
  drawerInactiveBackgroundColor: '#FFFFFF',
  drawerActiveTintColor: '#FFFFFF',
  drawerInactiveTintColor: '#000000',
  headerTintColor:'#FFFFFF', 
  headerStyle:{ backgroundColor:'#000000' }
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions = { option }>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;