import React, { Component } from 'react'
import { Text, View ,FlatList,StyleSheet,ToastAndroid,Dimensions,ScrollView} from 'react-native';
const {width,height} = Dimensions.get('window');
const p =width/600;
const ph = height/1410;
import Button from 'react-native-button';
export default class Publish extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      page:0
    }
  }
  componentDidMount(){
    this.getData(0);
  }
  getData=(page=0)=>{
    if(page == 0){
      this.setState({
        page
      })
    }else{
      this.setState({
        page
      })
    }
    let url = `https://cnodejs.org/api/v1/topics?limit=15&page=${page}`;
    fetch(url)
      .then(res=>res.json())
      .then(res=>{
        this.setState({
          data:res.data
        })
      })
  }
  toast=(page)=>{
    if(page === 0){
      ToastAndroid.show('已经是第一页了!',1000);
      this.getData(0);
    }else{
      this.getData(page);
    }
  }
  render() {
    return (
      <View>         
      <FlatList 
        data={this.state.data}
        renderItem={({item})=>{
          var rannum = Math.random();
          return(
            <View style={styles.item}>
            <Text style={styles.item1}>
              {item.title ? (item.title.length > 15 ? item.title.substring(0, 15) + "..." : item.title) : ""}
            </Text>
            <Text style={styles.item2}>{item.create_at.split('T')[0]}</Text>
            <Text style={styles.item3,{color:rannum>0.5?'#000':'#f23030'}}>{rannum>0.5?'已回复':'待回复'}</Text>
          </View>
          )
        }
        }
      />
      <View style={styles.bottomBox}>
        <Button style={styles.btn} onPress={()=>{this.toast(this.state.page !== 0 ? --this.state.page : 0)}}>上一页</Button>
        <Text style={styles.bottomText}>第{this.state.page+1}页</Text>
        <Button style={styles.btn} onPress={()=>{this.getData(++this.state.page)}}>下一页</Button>
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  item:{
    flex:1,
    flexDirection:"row",
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:"#fff"
  },
  item1:{
    flex:5
  },
  item2:{
    flex:3
  },
  item3:{
    flex:1
  },
  bottomBox:{
    width:'100%',
    height:50*ph,
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    position:"absolute",
    bottom:0
  },
  bottomText:{
    color:"#000"
  },
  btn:{
    backgroundColor:"#f23030",
    height:40*ph,
    width:150*p,
    borderRadius:20,
    color:"#fff",
    textAlignVertical:"center"
  }
})

