import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

const notificationsData = [
  { id: '1', title: 'New Message', description: 'You have received a new message from John.', icon: 'chatbubble-outline' },
  { id: '2', title: 'Update Available', description: 'A new update is available for your app.', icon: 'download-outline' },
  { id: '3', title: 'Reminder', description: 'Don’t forget to check your calendar for today’s events.', icon: 'calendar-outline' },
  { id: '4', title: 'Liked', description: '@Ria Liked Your Post', icon: 'heart-outline' },
  { id: '5', title: 'Comments', description: '@Her commented on your post', icon: 'chatbox-outline' },
  { id: '6', title: 'Reminder', description: 'Don’t forget to check your calendar for today’s events.', icon: 'alert-circle-outline' },
];

const NotificationItem = ({ title, description, icon, onPress }) => (
  <TouchableOpacity style={styles.notificationItem} onPress={onPress} activeOpacity={0.7}>
    <Ionicons name={icon} size={isWeb ? 24 : width * 0.07} color="white" style={styles.icon} />
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
  </TouchableOpacity>
);

const Notifications = () => {
  const handleNotificationPress = (id) => {
    console.log(`Notification ${id} pressed`);
    // Handle notification press (e.g., navigate to a specific screen)
  };

  const renderNotification = ({ item }) => (
    <NotificationItem
      title={item.title}
      description={item.description}
      icon={item.icon}
      onPress={() => handleNotificationPress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList 
        data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: isWeb ? '5%' : width * 0.05,
    maxWidth: isWeb ? 800 : '100%',
    alignSelf: 'center',
  },
  header: {
    fontSize: isWeb ? 28 : width * 0.08,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  list: {
    paddingBottom: height * 0.05,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: isWeb ? 18 : width * 0.04,
    marginVertical: isWeb ? 10 : height * 0.01,
    borderRadius: isWeb ? 8 : width * 0.03,
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    maxWidth: isWeb ? 600 : '100%',
  },
  icon: {
    marginRight: isWeb ? 14 : width * 0.04,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: isWeb ? 18 : width * 0.05,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationDescription: {
    fontSize: isWeb ? 14 : width * 0.04,
    color: 'white',
    marginTop: height * 0.005,
  },
});

export default Notifications;