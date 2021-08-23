import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from './Navigation/DrawerNavigator';

export default function App(){
  return(
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );  
}