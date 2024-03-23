import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/authSlice';

const HomeTab = ({navigation}) => {
  const userInfo = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text>Xin chào, {userInfo?.fullName || userInfo?.email}</Text>
      <TouchableOpacity style={styles.signoutBtn}>
        <Button onPress={onLogout} title="Sign Out" />
      </TouchableOpacity>
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
  signoutBtn: {
    marginTop: 12,
  },
});

export default HomeTab;
