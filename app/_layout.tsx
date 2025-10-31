import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import user from '/assets/images/user.png';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={[styles.screen, { backgroundColor: colorScheme === 'dark' ? '#000' : '#f5f5f5' }]}>
        <View style={styles.card}>
          {/* Profile Image */}
          <Image  source={{
            uri: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
          }}style={styles.image} />

          {/* Name & Role */}
          <Text style={[styles.name, { color: colorScheme === 'dark' ? '#fff' : '#222' }]}>
            Saad Shahzad
          </Text>
          <Text style={[styles.role, { color: colorScheme === 'dark' ? '#ccc' : '#666' }]}>
            Mobile Application Developer
          </Text>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.followButton]}
              onPress={() => console.log('Follow pressed')}
            >
              <Text style={styles.followText}>Follow</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.messageButton]}
              onPress={() => console.log('Message pressed')}
            >
              <Text style={styles.messageText}>Message</Text>
            </Pressable>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    fontSize: 14,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  followButton: {
    backgroundColor: '#007AFF',
  },
  messageButton: {
    backgroundColor: '#E5E5E5',
  },
  followText: {
    color: '#fff',
    fontWeight: '600',
  },
  messageText: {
    color: '#000',
    fontWeight: '600',
  },
});
