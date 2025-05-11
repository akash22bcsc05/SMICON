import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How are you?', isUser: false, name: 'John Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '2', text: 'I am good, thanks! How about you?', isUser: true, name: 'User', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: newMessage, isUser: true, name: 'User', image: 'https://example.com/user.jpg' }]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.receivedMessage]}>
      <Image source={{ uri: item.image }} style={styles.contactImage} />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.contactName}>{item.name}</Text>
      </View>
    </View>
  );

  const contacts = [
    { id: '1', name: 'John Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '2', name: 'Jane Doe', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
    { id: '3', name: 'Jim Smith', image: 'https://png.pngtree.com/png-vector/20200425/ourmid/pngtree-character-design-in-a-single-person-png-image_2194495.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Chat</Text>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        style={styles.messageList}
        contentContainerStyle={{ paddingBottom: 80 }}
        inverted
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder='Type a message...'
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Ionicons name='send' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: isWeb ? 20 : 10,
    maxWidth: isWeb ? 600 : '100%',
    alignSelf: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: isWeb ? 24 : 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    borderRadius: 12,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#6200ea',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#444',
  },
  messageText: {
    color: 'white',
    flex: 1,
    marginLeft: 10,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#6200ea',
    borderRadius: 20,
    padding: 12,
  },
});

export default Chat;
