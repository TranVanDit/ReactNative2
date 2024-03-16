
import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { FC, memo } from 'react'

type FooterType = {
  timeUpdate: string;
  backgroundColor: string;
}

const Footer: FC<FooterType> = memo(props => {
  const {timeUpdate, backgroundColor} = props
  console.log('re-Render Footer');
  return (
    <View style={containerStyle({height:100, backgroundColor:backgroundColor,alignItems:'center',justifyContent:'center',})}>
      <Text style={styles.textStyle}>Cập nhật vào ngày 15/3/2024 {timeUpdate}</Text>
    </View>
  )
})
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
const containerStyle = (props: ViewStyle) => ({
  ...props,
})
export{Footer}