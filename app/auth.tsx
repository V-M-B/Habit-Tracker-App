import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";


const AuthScreen = () => {
  const [isSignedUp, setIsSignedUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);


  const handleSwitchMode = () => {
    setIsSignedUp((prev) => !prev);
  };

  const handleAuth= async ()=>{
    if(!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError(null);


    
  }

  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title} variant="headlineLarge">
          {isSignedUp ? "Create Account" : "Sign In"}
        </Text>
        {/* Email */}
        <TextInput
          placeholder="your-email@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          label="Email"
          mode="outlined"
          style={styles.input}
          onChangeText={setEmail}
        />

        {/* Password */}
        <TextInput
          placeholder="password"
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
          label="Password"
          mode="outlined"
          onChangeText={setPassword}
        />
        {/* Error Message */}
        {error && ( 
          <Text style={{ color: "red", marginBottom: 12 }}>{error}</Text>
        )}

        {/* Sign Up / Sign In Button */}

        <Button mode="contained" style={styles.button} onPress={handleAuth}>
          {isSignedUp ? "Sign Up" : "Sign in"}
        </Button>

        <Button
          mode="text"
          onPress={handleSwitchMode}
          style={styles.switchmodebutton}
          labelStyle={styles.switchmodebuttonLabel}
        >
          {isSignedUp
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  content: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 32,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#faf9fa",
  },
  button: {
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#6200ee",
  },
  switchmodebutton: {
    width: "100%",
    marginTop: 8,
  },
  switchmodebuttonLabel: {
    color: "#6200ee",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default AuthScreen;