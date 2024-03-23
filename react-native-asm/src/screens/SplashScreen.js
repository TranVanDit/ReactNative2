import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const isLogin = useSelector(state => state.auth.isLogin);

  useEffect(() => {
    const t = setTimeout(() => {
      if (isLogin) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Signin');
      }
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, [navigation, isLogin]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
});

export default SplashScreen;
