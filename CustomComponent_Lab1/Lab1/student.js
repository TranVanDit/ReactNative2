import { View, Text } from 'react-native'
import React from 'react'

const Student= ({name, address, phone}) => {
  return (
    <View style={{ margin:20, alignItems:'center'}}>
      <Text> Name: {name}</Text>
      <Text> Address: {address}</Text>
      <Text> Phone: {phone}</Text>
    </View>
  )
}

export default Student