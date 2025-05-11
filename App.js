import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens.jsx/WelcomeScreen';
import LoginScreen from './Screens.jsx/Login';
import SignupScreen from './Screens.jsx/Signup';
import MainScreen from './Screens.jsx/MainScreen';
import NavigationBottomTag from './Components/NavigationBottomTag';
import { Profile } from './Screens.jsx';
import Chat from './Screens.jsx';
import ChatScreen from './Screens.jsx/ChatScreen.jsx';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer > 
  );
};

export default App;
