import React, { Component } from 'react'
import { Text, StyleSheet, View ,ImageBackground,Image,Dimensions,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
const {width,height}=Dimensions.get('window');
export default class SwiperPage extends Component {
  start=()=>{
    AsyncStorage.setItem('isInstall','true',()=>{
      this.props.getbool();
    });
  }
  render() {
    return (
        <View  style={styles.wrapper}>
        <Swiper showsButtons={false} loop={false}>
          <View style={styles.slide1}>
            <Image resizeMode="cover" style={styles.img} source={require('../../images/slide.png')}/>
          </View>
          <View style={styles.slide2}>
            <Image resizeMode="cover" style={styles.img} source={require('../../images/slide.png')}/>
          </View>
          <View style={styles.slide3}>
            {/* <ImageBackground resizeMode="cover" style={styles.img} source={require('../../images/assets/slide.png')}>
              <Button style={styles.start} onPress={()=>this.start()}>开始体验</Button>
            </ImageBackground> */}
            <Image resizeMode="cover" style={styles.img} source={require('../../images/slide.png')}/>
            <TouchableOpacity style={styles.start} onPress={this.start}>
              <Text style={styles.txt}>开始体验</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    height:height
  },
  img:{
    width:"100%",
    height:"100%"
  },
  start:{
    position:"absolute",
    left:width/2,
    bottom:100,
    marginLeft:-100,
    width:200,
    backgroundColor:"#000",
    borderRadius:25
    
  },
  txt:{
    color:"#fff",
    fontSize:20,
    lineHeight:50,
    textAlign:"center"
  }
})
