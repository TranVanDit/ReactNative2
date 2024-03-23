import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity  onPress={onPress} title={title} style={{
         borderRadius: 10, 
         borderColor: 'black', 
         borderWidth: 1, 
         height: 40, 
         width:'90%', 
         alignItems:'center',
         justifyContent:'center'}}>
        
      </TouchableOpacity>
    </View>
  )
}

export default Button