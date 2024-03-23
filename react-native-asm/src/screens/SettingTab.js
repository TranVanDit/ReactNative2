import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingTab = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Tabs</Text>
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

export default SettingTab;
