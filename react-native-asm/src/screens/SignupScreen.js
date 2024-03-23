import React from 'react';
import {
  Button,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {login} from '../redux/authSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address',
    ),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Password is not match'),
  fullname: yup.string().required('Fullname is required'),
});

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const onPressSend = ({email, fullname}) => {
    dispatch(login({email, fullName: fullname}));
    navigation.navigate('Splash');
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullname: '',
    },
  });

  return (
    <ScrollView style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/backgroud_login.jpeg')}
        style={styles.background}>
        <StatusBar backgroundColor="#4F6D7A" barStyle="light-content" />

        <View style={styles.container}>
          <Text style={styles.signupTxt}>Sign Up</Text>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Fullname</Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your fullname"
                />
              )}
              name="fullname"
            />
            {errors.fullname && (
              <Text style={styles.errorTxt}>{errors.fullname.message}</Text>
            )}
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>Email</Text>
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
            <Text style={styles.label}>Password</Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  placeholder="******"
                  secureTextEntry
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.errorTxt}>{errors.password.message}</Text>
            )}
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>Confirm password</Text>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  placeholder="******"
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text style={styles.errorTxt}>
                {errors.confirmPassword.message}
              </Text>
            )}
          </View>

          <View style={styles.loginBtn}>
            <Button title="Signup" onPress={handleSubmit(onPressSend)} />
          </View>

          <Text style={styles.footerText}>
            Already have an account?
            <Text style={styles.footerLink} onPress={() => navigation.goBack()}>
              {' '}
              Sign In
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    marginBottom: 240,
    alignItems: 'center',
  },
  label: {
    marginBottom: 4,
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
  signupTxt: {
    paddingLeft: 20,
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
  footerText: {
    color: 'black',
    marginBottom: 100,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
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
