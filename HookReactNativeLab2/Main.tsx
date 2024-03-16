import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Header } from './Header'
import{Body} from './Body'
import { Footer } from './Footer'


export type UserType = {
  name:string;
  avatar: string;
}
const colors = ['white','red','yellow','blue','orange','gray']

export default function Main() {
const[user,setUser] = useState<UserType>({
   name:'NO NAME',
   avatar: 'https://cdn2.dienthoaivui.com.vn/post/avata.png'
})
 const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin')
 const [footerColor, setFooterColor] = useState(colors[0])
 //ham random mau
 const handleRandomColor = useCallback(()=> {
    const numberRandom = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[numberRandom])
 },[])

 useEffect(()=>{
    const currentData = new Date();
    const datetime = currentData.getDate()+'/'+
    (currentData.getMonth()+1)+'/'+
    currentData.getFullYear()+' '+
    currentData.getHours()+':'+
    currentData.getMinutes()+':'+
    currentData.getSeconds()
    setLastTimeUpdate(datetime)
    console.log(datetime);
 },[user])
//cap nhat thong tin tai khoan
const handleUpdateInfor = useCallback((_user: UserType)=>{
   setUser(_user)
},[])

  return (
    <View>
      <Text style={styles.textStyle}>REACT NATIVE HOOKS</Text>
      <Header user={user} />
      <Body onUpdateInfor={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor}/>
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor}/>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center'
  }
})