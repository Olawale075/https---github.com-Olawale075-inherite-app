import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image, ImageBackgroundBase, ImageBackground } from 'react-native';

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
    <ImageBackground source={require('../assets/backgrounds.jpg')} style={styles.backgrounds}>
   
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },  backgrounds: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
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
    color: 'blue',
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
