import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatTab = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ChatTab;
