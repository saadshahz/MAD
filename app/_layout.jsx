import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";
import { ApiProvider } from "../context/ApiContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ApiProvider>
          <>
            <Stack screenOptions={{ headerShown: false }} />
            <Toast />
          </>
        </ApiProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
