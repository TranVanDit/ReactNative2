import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';

const FAKE_ACCOUNT = {
  email: 'admin@gmail.com',
  password: 'admin',
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address',
    ),
  password: yup.string().required('Password is required'),
});

const SigninScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onPressSend = ({email, password}) => {
    if (email === FAKE_ACCOUNT.email && password === FAKE_ACCOUNT.password) {
      dispatch(
        login({
          email,
        }),
      );

      navigation.navigate('Splash');
    } else {
      setError('password', {
        type: 'pattern',
        message: 'Password is not correct',
      });
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/backgroud_login.jpeg')}
      style={styles.background}>
      <StatusBar backgroundColor="#4F6D7A" barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.icon}>
          <Image
            source={require('../../assets/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.loginTxt}>Login</Text>
        </View>
        <View style={styles.inputWrap}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Enter your email"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.errorTxt}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.inputWrap}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder="Enter your password"
                secureTextEntry
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.errorTxt}>{errors.password.message}</Text>
          )}
        </View>

        <View style={styles.loginBtn}>
          <Button title="Login" onPress={handleSubmit(onPressSend)} />
        </View>

        <View style={styles.socialLoginWrap}>
          <TouchableOpacity style={styles.buttonAdd}>
            <Icon name="facebook-square" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd}>
            <Icon name="google" size={40} />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          Don't have an account?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: 'auto',
    marginTop: '25%',
    borderWidth: 0.1,
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    elevation: 200,
    borderRadius: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    objectFit: 'cover',
  },
  loginTxt: {
    paddingLeft: 20,
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    width: 120,
    height: 120,
    borderTopColor: 'red',
    borderBottomColor: 'red',
    borderLeftColor: 'blue',
    borderRightColor: '#763926',
    borderWidth: 1,
    marginHorizontal: '30%',
    marginVertical: 1,
    top: '-10%',
    borderRadius: 60,
  },
  buttonAdd: {
    borderRadius: 25,
    width: 50,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  footerText: {
    color: 'black',
    marginBottom: 100,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
  socialLoginWrap: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 50,
    justifyContent: 'center',
    marginBottom: 20,
    columnGap: 16,
  },
  loginBtn: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputWrap: {
    marginHorizontal: 20,
    marginTop: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  errorTxt: {
    color: 'red',
    marginTop: 2,
  },
});
