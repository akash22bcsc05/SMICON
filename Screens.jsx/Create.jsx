import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const Create = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFlipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef) {
      try {
        let photo = await cameraRef.takePictureAsync();
        Alert.alert('Photo Taken!', `Photo URI: ${photo.uri}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCameraRef(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleFlipCamera}>
            <Ionicons name="camera-reverse" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicture}>
            <Ionicons name="camera" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    flex: 0.1,
    alignItems: 'center',
  },
});

export default Create;