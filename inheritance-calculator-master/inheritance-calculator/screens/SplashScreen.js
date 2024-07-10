import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image, ImageBackgroundBase } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace('Home');
      }, 3000);
    });
  }, [fadeAnim, navigation]);

  return (
    
    <View style={styles.container}>
      <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
        <Text style={styles.description}>Design and implemented by </Text>
        <Text style={styles.description}>Adeleke Fatiah Ayomide</Text>
        <Image
          source={require('../assets/image.png')} 
          style={styles.logo}
        />
         <Text style={styles.description}>INHERITANECE APP</Text>
         <Text style={styles.description}> Supervise By Dr. (Mrs.) Abdulsalami B.A </Text>
      </Animated.View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }, description: {
    fontSize: 16,
    color: '#00000',
    textAlign: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 20,
  },
});

export default SplashScreen;
