import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome!</Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Quick Start</Text>
        <Text style={styles.body}>
          Edit the source in <Text style={styles.bold}>src/screens/WelcomeScreen.tsx</Text> to
          customize this screen. Open developer tools with{' '}
          <Text style={styles.bold}>
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m', web: 'F12' })}
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  bold: {
    fontWeight: '700',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
