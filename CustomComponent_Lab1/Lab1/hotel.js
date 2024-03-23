import { View, Text } from 'react-native'
import React from 'react'

const Hotel = ({ name, timeOut, addressHotel}) => {
  return (
    <View>
       <Text numberOfLines={2} style={{ marginBottom: 10 }}>Tên khách hàng {'\n'}
                {name}
       </Text>
       
       <Text numberOfLines={2} style={{ marginBottom: 10 }}>Giờ mở cửa {'\n'}
                {timeOut}
       </Text>

       <Text numberOfLines={2} style={{ marginBottom: 10 }}>Địa điểm {'\n'}
        {addressHotel}
       </Text>
    </View>
  )
}

export default Hotel