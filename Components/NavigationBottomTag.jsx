import React from 'react';
import { Platform, View, Text } from 'react-native';
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Chat from '../Screens.jsx/Chat';
import  Feed  from '../Screens.jsx/Feed';
import Notifications from '../Screens.jsx/Notifications';
import Profile from '../Screens.jsx/Profile';
import Create from '../Screens.jsx/Create';
const Tab = createBottomTabNavigator();

const Placeholder = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name}</Text>
  </View>
);

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
};

const NavigationBottomTag = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Feed"
        component={() => <Placeholder name={<Feed/>} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? 'purple' : 'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={() => <Placeholder name={<Chat/>} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="chatbox-outline" size={24} color={focused ? 'purple' : 'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={() => <Placeholder name={<Create/>} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <LinearGradient
              colors={['#F6846', '#EEA849']}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: Platform.OS === 'ios' ? 50 : 60,
                height: Platform.OS === 'ios' ? 50 : 60,
                borderRadius: 22,
                borderColor: '#fff',
                borderWidth: 4,
              }}
            >
              <Feather name="plus-circle" size={24} color="white" />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={() => <Placeholder name={<Notifications/>} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="heart" size={24} color={focused ? 'purple' : 'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <Placeholder name={<Profile/>} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user-circle" size={24} color={focused ? 'purple' : 'white'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottomTag;
