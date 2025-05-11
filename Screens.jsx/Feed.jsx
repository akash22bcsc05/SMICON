import * as React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const suggestions = [
  { id: "1", title: "Timeline" },
  { id: "2", title: "Friends" },
  { id: "3", title: "Events" },
];

const Feed = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -50],
    extrapolate: "clamp",
  });

  const suggestionsTranslateY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 50],
    extrapolate: "clamp",
  });

  const renderHead = () => (
    <Animated.View
      style={[
        styles.headerContainer,
        { transform: [{ translateY: headerTranslateY }] },
      ]}
    >
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>My Networks</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialIcons name="search" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </Animated.View>
  );

  const renderSuggestionsContainer = () => (
    <Animated.View
      style={[
        styles.suggestionsContainer,
        { transform: [{ translateY: suggestionsTranslateY }] },
      ]}
    >
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Text style={styles.suggestionText}>{item.title}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  );

  const data = [
    { id: "1", Image: require("../assets/Luigi Lucarelli.jpg") },
    { id: "2", Image: require("../assets/ae0cc142-8026-4882-a765-5b9b66356f1e.jpg") },
    { id: "3", Image: require("../assets/Girl free icons designed by Creartive.jpg") },
  ];

  const CustomImageScroll = ({ data }) => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.Image} style={styles.image} />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add +</Text>
          </TouchableOpacity>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );

  const renderFeedPost = () => {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          width: 20,
          borderRadius: 26,
          borderWidth: 1,
          borderColor: "#fff",
          marginVertical: 12,
          paddingHorizontal: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 8,
            }}
          >
            <Image
              source={require("../assets/Luigi Lucarelli.jpg")}
              style={{
                height: 52,
                width: 52,
                borderRadius: 20,
              }}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={{ fontWeight: "bold" }}>Shubham</Text>
              <Text>Suggested</Text>
            </View>
            <MaterialCommunityIcons name="dots-vertical" size={24} />
            <View>
              <Text style={{ fontStyle: "normal", fontSize: "large" }}>
                Follow
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {renderHead()}
        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {renderSuggestionsContainer()}
          {/* Additional content can be added here */}
          {renderFeedPost()}
          {CustomImageScroll(data)}
        </ScrollView>
        <View style={styles.imageScrollContainer}>
          <CustomImageScroll data={data} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 8,
            paddingVertical: 18,
            borderTopWidth: 1,
            borderTopColor: "black",
          }}
        >
          <Image
            source={require("../assets/Luigi Lucarelli.jpg")}
            resizeMode="contain"
            style={{
              height: 52,
              width: 52,
              borderRadius: 26,
            }}
          />
          <View
            style={{
              flex: 1,
              height: 52,
              borderRadius: 26,
              borderWidth: 1,
              borderColor: "#CCC",
              marginLeft: 12,
              paddingLeft: 12,
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Add a Post"
              placeholderTextColor={"black"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 250,
    paddingHorizontal: 90,
    marginTop: 150,
  },
  innerContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft:50
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginRight: 30,
  },
  suggestionsContainer: {
    marginVertical: 20,
    marginLeft:50
  },
  suggestionItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  suggestionText: {
    fontSize: 16,
  },
  imageScrollContainer: {
    marginTop: 20,
    marginBottom: 50, // Adjust margin based on layout needs
  },
  imageContainer: {
    marginRight: 10,
    alignItems: "center", // Center align the button
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  addButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor:'black',
    borderWidth:1,
    shadowColor:'black'
  },
  addButtonText: {
    color: "black",
    fontSize: 16,
  },
});

export default Feed;