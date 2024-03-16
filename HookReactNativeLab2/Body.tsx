
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native'
import React, { FC, memo, useState } from 'react'
import { UserType } from './Main'


type BodyType = {
  onUpdateInfor:(uaer: UserType) => void;
  onClickChangeBgFooter:()=>void;
}
 const  Body:FC<BodyType> = memo (props => {
  console.log('re-Render Body');
  const {onUpdateInfor, onClickChangeBgFooter} = props
  const [name, setName] = useState('')
  const [linkImage, setLinkImage] = useState('')
  const handleChangeInfor = () =>{
    if(name.length > 0 && linkImage.length > 0){
      onUpdateInfor({name, avatar:linkImage})
    }else{
      ToastAndroid.show('Khong duoc de trong',ToastAndroid.SHORT)
    }
  }
return (
  <View >
    <View style={styles.containerStyle}>
    <TextInput value={name} onChangeText={setName} style={styles.input} placeholder='input name'/>
    <TextInput value={linkImage} onChangeText={setLinkImage} style={styles.input} placeholder='input link image?'/>
    </View>

    <View style={styles.buttoninput}>
    <Button title='Update Infor'onPress={handleChangeInfor}/>
    <Button title='Change Color Footer' onPress={onClickChangeBgFooter}/>
    </View>
  </View>
)
})
export{Body}
const styles = StyleSheet.create({
  input:{
    height:40,
    width:'90%',
    marginBottom:10,
    borderWidth:1,
    padding:10,
    
  },
  containerStyle:{
   alignItems:'center',
  },
  buttoninput:{
    width:'90%',
    marginLeft:20,
  }


})

