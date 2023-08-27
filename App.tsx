import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/home";
import AvatarHome from "./src/screens/avatarhome";
import ShoeScreen from "./src/screens/shoe";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shoe" component={ShoeScreen} />
        <Stack.Screen name="Avatar" component={AvatarHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
