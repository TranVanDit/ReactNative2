import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Calendar from './calendar';
import Hotel from './hotel';
import Button from './button';

const Bai2 = () => {
  return (
    <View>
      <View>
        <Text style={styles.container}>Lịch Trình</Text>
        <View style={styles.containerText}>
          <Calendar
            address="Tây Sơn, Bình Định"
            fullTime="09:00 AM - 12:00 AM, 12/10/2024"
            vehicle="Xe bus"
            time="21:00 - 22:00"
            style={styles.calendarText}
          />
          <Image
            style={{ width: 'auto', height: 150 }}
            source={require('../../image/image.png')} // Provide the correct path to your image
          />
        </View>
      </View>
      <View>
        <Text style={styles.container}>Khách Sạn</Text>
        <View style={styles.containerText}>
          <Hotel
            name="Tran Van A"
            timeOut="06:30 AM - 12:20 AM"
            addressHotel="234 Quang Trung, Ho Chi Minh"
          />
          <Button title="Chi tiet">Chi tiet</Button>
        </View>
      </View>
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'MuseoModerno-Black',
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerText: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
    borderRadius: 20,
    margin: 20,
    padding: 10,
  },
});
