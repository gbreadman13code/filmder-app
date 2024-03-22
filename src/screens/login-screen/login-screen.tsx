import { observer } from "mobx-react-lite";
import React from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useStore } from "../../services/RootStore";

export const LoginScreen = observer(() => {
  const { userService } = useStore();

  return (
    <View style={styles.container}>
      <TextInput
        value={userService.credentials.email}
        style={styles.input}
        placeholder="почта"
        placeholderTextColor={"#ffffff"}
        autoCapitalize="none"
        onChangeText={userService.setEmail}
      />
      <TextInput
        value={userService.credentials.password}
        style={styles.input}
        placeholder="пароль"
        placeholderTextColor={"#ffffff"}
        secureTextEntry
        autoCapitalize="none"
        onChangeText={userService.setPassword}
      />

      {userService.loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Button title="Войти" onPress={userService.signIn} />
          <Button title="Создать аккаунт" onPress={userService.signUp} />
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    backgroundColor: "#000000",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#ffffff",
  },
});
