import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { FavoriteScreen } from "./src/screens/favorite-screen/favorite-screen";
import { LoginScreen } from "./src/screens/login-screen/login-screen";
import { MainScreen } from "./src/screens/main-screen/main-screen";
import { SearchParamsScreen } from "./src/screens/search-params-screen/search-params-screen";
import { RootStore, StoreProvider, useStore } from "./src/services/RootStore";

export const StoreContext = observer(() => {
  const { userService } = useStore();

  const Stack = createNativeStackNavigator();

  const PrivateStack = createNativeStackNavigator();

  const PrivateLayout = () => (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name="main" component={MainScreen} />
      <PrivateStack.Screen
        name="search-params"
        component={SearchParamsScreen}
      />
      <PrivateStack.Screen name="favorite" component={FavoriteScreen} />
    </PrivateStack.Navigator>
  );

  useEffect(() => {
    userService.init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          {userService.user ? (
            <Stack.Screen name="private" component={PrivateLayout} />
          ) : (
            <Stack.Screen name="login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaView>
  );
});

export default function App() {
  const store = new RootStore();

  return (
    <StoreProvider store={store}>
      <StoreContext />
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
