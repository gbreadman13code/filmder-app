import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { FavoriteScreen } from "./src/screens/favorite-screen/favorite-screen";
import { MainScreen } from "./src/screens/main-screen/main-screen";
import { SearchParamsScreen } from "./src/screens/search-params-screen/search-params-screen";
import { RootStore, StoreProvider } from "./src/services/RootStore";

export default function App() {
  const store = new RootStore();

  const Stack = createNativeStackNavigator();

  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="main" component={MainScreen} />
            <Stack.Screen name="search-params" component={SearchParamsScreen} />
            <Stack.Screen name="favorite" component={FavoriteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
