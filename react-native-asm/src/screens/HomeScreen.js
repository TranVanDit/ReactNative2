/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeTab from './HomeTab';
import SettingTab from './SettingTab';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ChatTab from './ChatTab';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <MaterialIcons name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatTab}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: () => (
            <MaterialIcons name="mark-unread-chat-alt" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingTab"
        component={SettingTab}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <MaterialIcons name="settings" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
