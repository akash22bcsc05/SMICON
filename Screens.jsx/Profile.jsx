import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';

const renderProfileCard = (navigation) => {
  const goToEdit = () => {
    navigation.navigate("EditProfile");
  };
  return (
    <View style={styles.profileCard}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Luigi Lucarelli.jpg')}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.profileHeader}>
          <View>
            <Text style={styles.name}>Akash</Text>
            <Text style={styles.subtitle}>A new person</Text>
          </View>
          <TouchableOpacity onPress={goToEdit}>
            <Feather name='edit' size={24} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileStats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1000</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.detail}>Student</Text>
          <Text style={styles.detail}>20 Y/O</Text>
        </View>
        <View style={styles.yourPostsContainer}>
          {renderButtonY()}
        </View>
      </View>
    </View>
  );
};

const renderButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <LinearGradient colors={['purple', 'black']} style={styles.button}>
        <AntDesign name="pluscircleo" size={24} color={'white'} />
        <Text style={styles.buttonText}>Add Post</Text>
      </LinearGradient>
    </View>
  );
};

const renderButtonY = () => {
  return (
    <View style={styles.yourPostsButtonContainer}>
      <LinearGradient colors={['purple', 'black']} style={styles.yourPostsButton}>
        <Text style={styles.buttonText}>Your Posts</Text>
        <Entypo name="chevron-down" size={24} color={'white'} />
      </LinearGradient>
    </View>
  );
};

const Profile = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {renderProfileCard(navigation)}
        {renderButton()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  profileCard: {
    width: 300,
    height: 450,
    marginHorizontal: 22,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4.5,
    },
    shadowOpacity: 0.12,
    shadowRadius: 0.65,
    elevation: 2,
    borderRadius: 35,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: 'white',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 6,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stat: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    fontSize: 20,
    color: 'gray',
  },
  yourPostsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  yourPostsButtonContainer: {
    marginBottom: 15,
  },
  yourPostsButton: {
    height: 50,
    width: 200,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 22,
    marginVertical: 12,
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    marginLeft: 12,
    color: 'white',
  },
  editProfileButton: {
    marginTop: 20,
  },
  editProfileGradient: {
    height: 50,
    width: 200,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Profile;