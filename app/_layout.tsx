import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Listen for authentication changes (in real app, use context or global state)
  useEffect(() => {
    // You can check for token/session here and update isAuthenticated
  }, []);

  return (
    <PaperProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen
            name="auth"
            options={{ title: "SignUp" }}
            initialParams={{ onAuthSuccess: () => setIsAuthenticated(true) }}
          />
        ) : (
          <Stack.Screen name="(tabs)" />
        )}
      </Stack>
    </PaperProvider>
  );
}
