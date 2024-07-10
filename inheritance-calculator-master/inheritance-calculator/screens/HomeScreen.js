import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, ImageBackground } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useFocusEffect(
    React.useCallback(() => {
      // Reset animation values
      fadeAnim.setValue(0);
      slideAnim.setValue(-100);

      // Start animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start();
    }, [fadeAnim, slideAnim])
  );

  return (
    <ImageBackground source={require('../assets/backgrounds.jpg')} style={styles.background}>
   
    <View style={styles.container}>
      <Animated.Text style={[styles.intro, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        Welcome to the Islamic Inheritance Calculator
      </Animated.Text>
      <Animated.Text style={[styles.description, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        Click on "Calculate Shares" to determine the inheritance shares of each heir.
        Access "Islamic Rules" to understand the principles of Islamic inheritance.
      </Animated.Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculate')}>
          <Text style={styles.buttonText}>Calculate Shares</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rules')}>
          <Text style={styles.buttonText}>Access Islamic Rules</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,8,0,0.5)', // Optional: Add overlay for better text readability
  },
  intro: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4aeeee',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#4aeeee',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
