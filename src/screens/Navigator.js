import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import FullPreviewScreen from './FullPreviewScreen'

const AppStack = createStackNavigator()

const Navigator = () => (
  <NavigationContainer>
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="FullPreviewScreen" component={FullPreviewScreen} />
    </AppStack.Navigator>
  </NavigationContainer>
)

export default Navigator
