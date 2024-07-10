import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CalculateScreen from '../screens/CalculateScreen';
import ResultScreen from '../screens/ResultScreen';
import RulesScreen from '../screens/RulesScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculate" component={CalculateScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Rules" component={RulesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
