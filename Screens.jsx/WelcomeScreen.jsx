import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <LinearGradient
      colors={[styles.colors.primary, styles.colors.secondary]}
      style={styles.Lg}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image
            source={require("../assets/Luigi Lucarelli.jpg")}
            style={styles.im1}
          />
          <Image
            source={require("../assets/ae0cc142-8026-4882-a765-5b9b66356f1e.jpg")}
            style={styles.im2}
          />
          <Image
            source={require("../assets/Girl free icons designed by Creartive.jpg")}
            style={styles.im3}
          />
        </View>
        <View style={styles.text1}>
          <Text style={styles.text2}>Let's Get Started</Text>
          <Text style={styles.text3}>Your Connections At Your Fingertips</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={goToLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customButton} onPress={goToSignup}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  colors: {
    primary: "black",
    secondary: "purple",
  },
  Lg: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontSize: 40,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 20,
  },
  text3: {
    fontSize: 24,
    color: "#ffffff",
  },
  text1: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 300,
    width: "100%",
    alignItems: "center",
  },
  im1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    left: 20,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  im2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  im3: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom:70,
  },
  customButton: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: '#007260',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
