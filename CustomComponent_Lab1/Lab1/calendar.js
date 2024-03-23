import { View, Text, Image } from 'react-native'
import React from 'react'

const Calendar = ({ address, fullTime, vehicle, time }) => {
    return (
        <View>
            <Text numberOfLines={2} style={{ marginBottom: 10 }}>Địa điểm {'\n'}
                {address}
            </Text>

            <Text numberOfLines={2} style={{ marginBottom: 10 }}>Thời gian {'\n'}
                {fullTime}
            </Text>

            <Text numberOfLines={2} style={{ marginBottom: 10 }}>Phương tiện di chuyển {'\n'}
                {vehicle}
            </Text>

            <Text numberOfLines={2} style={{ marginBottom: 10 }}>Thời Gian {'\n'}
                {time}
            </Text>

            <Text>Hình ảnh {'\n'}
             
            </Text>
        </View>
    )
}

export default Calendar