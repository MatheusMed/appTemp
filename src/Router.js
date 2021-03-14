import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';


import Home from './pages/Home';
import Search from './pages/Search';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon:({ color,size }) => {
        let iconName;
        switch(route.name) {
          case 'Home':
            iconName = 'home';
              break;
          case 'Search':
            iconName = 'search';
            break;
           default:
             iconName = 'circle';
              break;
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      
    })}
    tabBarOptions={{
      activeTintColor: '#9C27B0',
      inactiveTintColor: '#777',
    }}
    
    >
      <Tabs.Screen name='Home' component={Home} options={{title:'Inicio'}} />
      <Tabs.Screen name='Search' component={Search} options={{title:'Pesquisar'}}/>
    </Tabs.Navigator>
  );
};