import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import user from '/assets/images/user.png';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value:string) => {
    Vibration.vibrate(30)

    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      if (!input) {
        setResult("");
      }
      else{
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult("Error");
        }
      }  
    } else if(value === "Del"){
      setInput((prev) => prev.slice(0, -1));
    }else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["C", "/", "*", "Del"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", ".", "%"],
  ];


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn === "=" && styles.equalButton,
                  btn === "C" && styles.clearButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#101010",
    justifyContent: "flex-end",
  },
  displayContainer: {
    padding: 20,
    marginBottom: 10,
  },
  inputText: {
    color: "#fff",
    fontSize: 36,
    textAlign: "right",
  },
  resultText: {
    color: "#00FFAA",
    fontSize: 28,
    textAlign: "right",
    marginTop: 10,
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  equalButton: {
    backgroundColor: "#00BFFF",
  },
  clearButton: {
    backgroundColor: "#FF4444",
  },
});
