import React, { Component } from 'react'
import {View , Text , StyleSheet ,TextInput,AsyncStorage,ActivityIndicator} from 'react-native';
import {Actions} from "react-native-router-flux"
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from 'react-native-button';
import  {myFetch} from '../Utils'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      pwd:'',
      isRegister:false
    }
  }
  textChanged=(text,type)=>{
    if(type =='username'){
      this.setState({username:text})
    }
    if(type == 'pwd'){
      this.setState({pwd:text})
    }
  }
  register=()=>{
    this.setState({isRegister:true})
    myFetch.post('login',{
      username:this.state.username,
      pwd:this.state.pwd
    }).then(res=>{
      console.log(res);
      AsyncStorage.setItem('user',JSON.stringify(res.data))
        .then(()=>{
          Actions.login();
        })
    })
  }
  render() {
    return (
      <View style={styles.center}>
        <View style={styles.frontbox}>
          <View style={styles.grandcss}>
            <Icon style={styles.icon} name="user" size={25} color="red"/>
            <TextInput style={styles.textinput} placeholder="用户名" onChangeText={text=>this.textChanged(text,'username')}/>
          </View>

          <View style={styles.grandcss}>
            <Icon style={styles.icon} name="lock" size={25} color="red"/>
            <TextInput style={styles.textinput} placeholder="密码" secureTextEntry={true}  onChangeText={text=>this.textChanged(text,'pwd')}/>
          </View>
          
          <View style={styles.btns}>
            <Button style={styles.btn} onPress={()=>this.register()}>注册</Button>
            <Button style={styles.btn} onPress={()=>Actions.pop()}>返回</Button>
          </View>
        </View>
        {
          this.state.isRegister ?<View><ActivityIndicator/><Text>正在注册...</Text></View> :<Text></Text>
        }
      </View>
    )
  }
}
const styles=StyleSheet.create({
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  frontbox:{
    width:"80%",
    alignItems:"center",
  },
  grandcss:{
    flexDirection:"row",
    width:"80%",
    height:40,
    borderBottomWidth:2,
    borderBottomColor:"rgb(210,210,210)",
    marginVertical:10
  },
  box:{
    width:40,
    height:40,
    backgroundColor:"gray",
    color:"rgb(255,255,255)",
    lineHeight:43,
    borderRadius:20,
    textAlign:"center",
    fontSize:40,
    marginLeft:10
  },
  icon:{
    textAlignVertical:"center",
    marginHorizontal:10
  },
  btns:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  btn:{
    width:120,
    lineHeight:30,
    backgroundColor:"#1F6BE0",
    color:"#fff",
    borderRadius:15,
    marginTop:10
  },
  textinput:{
    width:"100%",
  }
})