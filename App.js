
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={
    {
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: '#cccccc'
    }
  }>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
    }} />
    <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{
      drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
    }} />
  </Drawer.Navigator>
}


export default function App() {
  return <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator
        //    initialRouteName='MealsCategories'
        screenOptions={
          {
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }
        }
      >
        <Stack.Screen
          name='Drawer'
          component={DrawerNavigator}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen name='MealOverView' component={MealOverViewScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  </>
}

const styles = StyleSheet.create({

});
