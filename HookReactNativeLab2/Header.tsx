
import { View, Text, Image, StyleSheet } from 'react-native'
import React, { FC, memo } from 'react'
import { UserType } from './Main'

type HeaderType = {
  user: UserType
}

const Header: FC<HeaderType> = memo(props => {
  const{user} = props
  console.log('re-Render Header');
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.avatarStyle} resizeMode='center' source={{ uri:user.avatar}} />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Xin chào ngày mới</Text>
        <Text style={styles.textName}>{user.name}</Text>
      </View>
    </View>
  )
})
export {Header}
const styles = StyleSheet.create({
  containerStyle: {
    height: 100,
    padding: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatarStyle: {
    height: 60,
    width: 60,
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 20,
    flexWrap: 'wrap'
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textName: {
    fontSize: 16,
    color: 'blue'
  }
})