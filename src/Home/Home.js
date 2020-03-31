import React, { Component } from 'react'
import { Text, View ,StyleSheet,TextInput,Dimensions,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
const {width} = Dimensions.get('window');
const p = width/600; 
export default class Home extends Component {
  render() {
    return (
      <View>
        {/* 搜索框 */}
        <View style={styles.titlebar}>
          <View style={styles.frontbox}>
              <View style={styles.grandcss}>
                <Icon name='search' style={[styles.icon1]}/>
                <TextInput placeholder="请输入您想要搜索的关键字" placeholderTextColor="#fff" style={{fontSize:22*p,color:"#fff"}}/>
              </View>
            <View style={styles.icon2}><Icon name="shopping-cart" style={styles.icon2} /></View>
          </View>
        </View>
        {/* 轮播图 */}
        <View style={styles.wrapper}>
          <Swiper showsButtons={false} autoplay activeDotColor="#fd0304" >
            <View>
            <Image resizeMode="cover" style={{width:"100%",height:"100%"}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}/>
            </View>
            <View>
            <Image resizeMode="cover" style={{width:"100%",height:"100%"}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}/>
            </View>
            <View>
            <Image resizeMode="cover" style={{width:"100%",height:"100%"}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}/>
            </View>
          </Swiper>
        </View>
        {/* Tools */}
        <View style={{flex:1,justifyContent:"space-between"}}>
          <View style={styles.slide}>
            <View style={styles.slide1}><View style={[styles.flag,{backgroundColor:"#fcc"}]}><Icon style={styles.text} name='tools'/></View></View>
            <View style={styles.slide2}><Text style={styles.text}>居家维修保养</Text></View>
            <View style={styles.slide3}><Icon style={styles.text} name="chevron-right"/></View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}><View style={[styles.flag,{backgroundColor:"#ffe1b1"}]}><Icon style={styles.text} name='flag'/></View></View>
            <View style={styles.slide2}><Text style={styles.text}>住宿优惠</Text></View>
            <View style={styles.slide3}><Icon style={styles.text} name="chevron-right"/></View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}><View style={[styles.flag,{backgroundColor:"#bfe6a8"}]}><Icon style={styles.text} name='stopwatch'/></View></View>
            <View style={styles.slide2}><Text style={styles.text}>出行接送</Text></View>
            <View style={styles.slide3}><Icon style={styles.text} name="chevron-right"/></View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}><View style={[styles.flag,{backgroundColor:"#c3ddf2"}]}><Icon style={styles.text} name='gift'/></View></View>
            <View style={styles.slide2}><Text style={styles.text}>E族活动</Text></View>
            <View style={styles.slide3}><Icon style={styles.text} name="chevron-right"/></View>
          </View>
          <View style={styles.slide}>
            <Button style={styles.btn}>发布需求</Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  // 搜索框
  titlebar:{
    backgroundColor:"#f23030",
    paddingBottom:10
  },
  frontbox:{
    flexDirection:"row",
    height:50,
    marginTop:25,
    justifyContent:"space-evenly"
  },
  grandcss:{
    flexDirection:"row",
    width:"80%",
    backgroundColor:"#fbb8b8",
    borderRadius:20
  },
  fathcss:{
    marginLeft:15,
    marginTop:10,
    marginRight:10,
    width:20,
    height:20
  },
  icon2:{
    color:"#fff",
    marginTop:"1%",
    fontSize:35
  },
  icon1:{
    color:"#fff",
    marginHorizontal:"5%",
    textAlignVertical:"center",
    fontSize:28
  },
  // 轮播图
  wrapper: {
    height:250
  },
  // Tools
  slide:{
    width:width,
    height:120*p,
    flexDirection:"row",
    borderTopWidth:10 *p,
    borderTopColor:"#f5f5f5",
    justifyContent:"center"
  },
  slide1:{
    flex:3,
    justifyContent:"center",
    alignItems:"center"
  },
  slide2:{
    flex:7
  },
  slide3:{
    flex:1
  },
  text:{
    fontSize:22*p,
    height:120*p,
    textAlignVertical:"center"
  },
  flag:{
    width:100*p,
    height:100*p,
    borderRadius:60*p,
    justifyContent:"center",
    alignItems:"center"
  },
  // 发布按钮
  btn:{
    backgroundColor:"#f23030",
    width:545*p,
    height:70*p,
    color:"#fff",
    fontSize:18,
    textAlignVertical:"center",
    borderRadius:10*p
  }
})
