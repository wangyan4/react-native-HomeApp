import React, { Component } from 'react';
import { Text, View ,Image,StyleSheet,Dimensions,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
const {width,height} = Dimensions.get('window');
const p = width/600; 
const ph = height/1410;

const options = {
  title: '选择',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};
export default class My extends Component {
  constructor(){
    super();
    this.state={
      avatarSource: {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
    }
    
  }
  takephoto=()=>{
    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        console.log('Error:', response.error);
      } else if (response.customButton) {
        console.log('custom:', response.customButton);
      } else {
        const source = { uri: response.uri };
        AsyncStorage.setItem('imgpath',JSON.stringify(source),()=>{console.log('set success')});
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  componentDidMount(){
    AsyncStorage.getItem('imgpath')
      .then(res=>{
        if(res !== null){
          this.setState({avatarSource:JSON.parse(res)})
        }else{
          this.setState({avatarSource:{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}})
        }
      });
  }
  exitLogin=()=>{
    AsyncStorage.removeItem('user',(error)=>{
      error?console.log('删除失败'):console.log('删除成功');
    })
      .then(()=>{
        Actions.replace('login');
      })
  }
  render() {
    return (
      <View>
        <View style={styles.mytitle}>
          <Button onPress={()=>{this.takephoto()}}>
            <Image resizeMode="cover" style={styles.headimg} source={this.state.avatarSource}/>
          </Button>
          <Text style={{color:"#fff",fontSize:20*p,fontWeight:'bold'}}>BINNU GHILION</Text>
        </View>
        <View>
          <View style={styles.boxtitle}>
            <Icon name='user' style={styles.titleicon}/>
            <Text style={styles.titletext}>我的个人中心</Text>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.boxitem}>
              <Icon name='settings' style={styles.itemicon}/>
              <Text style={styles.titletext}>账户管理</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='map-pin' style={styles.itemicon}/>
              <Text style={styles.titletext}>收货地址</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='credit-card' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的信息</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='file-text' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的订单</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='slack' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的二维码</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='award' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的积分</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='star' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的收藏</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.boxtitle}>
            <Icon name='user' style={styles.titleicon}/>
            <Text style={styles.titletext}>E族活动</Text>
          </View>
          <View style={styles.boxcontent}>
            <View style={styles.boxitem}>
              <Icon name='codesandbox' style={styles.itemicon}/>
              <Text style={styles.titletext}>居家维修保养</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='truck' style={styles.itemicon}/>
              <Text style={styles.titletext}>出行接送</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='user' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的受赠人</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='file-text' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的住宿优惠</Text>
            </View>
            <View style={styles.boxitem}>
              <Icon name='flag' style={styles.itemicon}/>
              <Text style={styles.titletext}>我的活动</Text>
            </View>
            <View style={styles.boxitem}>
                <Icon name='edit' style={styles.itemicon} onPress={()=>Actions.publish()}/>
                <Text style={styles.titletext} onPress={()=>Actions.publish()}>我的发布</Text>
            </View>
          </View>
        </View>
        <View style={styles.exit}>
          <Button style={styles.exitbtn} onPress={this.exitLogin}>退出登录</Button>
        </View>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  mytitle:{
    height:370*ph,
    backgroundColor:"#f23030",
    justifyContent:"center",
    alignItems:"center"
  },
  headimg:{
    height:120*ph,
    width:120*ph,
    borderRadius:155/2*p,
    marginBottom:25*p
  },
  boxtitle:{
    flexDirection:"row",
    paddingLeft:20*p,
    paddingVertical:20*ph,
    backgroundColor:"#fff"
  },
  titleicon:{
    fontSize:30*p,
    marginRight:30*p,
    color:"#c3c3c3"
  },
  titletext:{
    fontSize:20*p,
    color:"#4f4e4e"
  },
  boxcontent:{
    flexDirection:"row",
    flexWrap:"wrap",
    borderTopWidth:1*ph,
    borderTopColor:"#eee",
    backgroundColor:"#fff",
    borderBottomWidth:10*ph,
    borderBottomColor:"#eee"
  },
  boxitem:{
    width:width/3,
    height:135*ph,
    justifyContent:"center",
    alignItems:"center"
  },
  itemicon:{
    fontSize:30*p,
    color:"#c3c3c3",
    marginBottom:10*ph
  },
  exit:{
    alignItems:"center"
  },
  exitbtn:{
    backgroundColor:"#f23030",
    width:400*p,
    height:50*p,
    color:"#fff",
    fontSize:18,
    textAlignVertical:"center",
    borderRadius:10*p
  }
})
