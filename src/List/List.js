import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

export default class List extends Component {
  render() {
    return (
      <View>
          {/* 搜索框 */}
          <View style={styles.search}>
            <View style={styles.search_box}>
              <TextInput 
                placeholder="请输入商品名称"
                style={styles.search_text}
              />
              <Icon name="search" style={styles.search_icon}/>
            </View>
          </View>
          {/* 分类列表 */}
          <View style={styles.list}>
            <View style={styles.list_box}><Text style={[styles.list_item,{color:"red"}]}>综合</Text></View>
            <View style={styles.list_box}><Text style={styles.list_item}>销量</Text></View>
            <View style={styles.list_box}><Text style={styles.list_item}>新品</Text></View>
            <View style={styles.list_box}><Text style={styles.list_item}>价格</Text></View>
            <View style={styles.list_box}><Text style={styles.list_item}>信用</Text></View>
          </View>
          <ScrollView>
          {/* 列表详情 */}
          <View style={styles.content}>
            <View style={styles.content_box}>
              <Image style={styles.img}  source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
            <View style={styles.content_box}>
              <Image style={styles.img} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
            <View style={styles.content_box}>
              <Image style={styles.img} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
            <View style={styles.content_box}>
              <Image style={styles.img} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
            <View style={styles.content_box}>
              <Image style={styles.img} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
            <View style={styles.content_box}>
              <Image style={styles.img} source={{uri:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555340726,2889148430&fm=26&gp=0.jpg"}}/>
              <Text style={styles.descripe}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.price}>36.00</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 顶部搜索框
  search:{
    height:60,
    padding:10,
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"center"
  },
  search_box:{
    width:"90%",
    height:40,
    flexDirection:"row",
    borderRadius:5,
    backgroundColor:"#eee"
  },
  search_text:{
    width:"90%",
    paddingLeft:10
  },
  search_icon:{
    color:"gray",
    marginTop:"3%"
  },
  // 分类列表
  list:{
    height:60,
    backgroundColor:"#fff",
    marginTop:5,
    flexDirection:"row",
    paddingLeft:10,
    paddingRight:10
  },
  list_box:{
    width:"20%"
  },
  list_item:{
    lineHeight:60,
    textAlign:"center"
  },
  // 列表详情
  content:{
    flexDirection:"row",
    justifyContent:"space-around",
    flexWrap:"wrap"
  },
  content_box:{
    width:"45.5%",
    height:300,
    padding:10,
    marginTop:20,
    backgroundColor:"#fff" 
  },
  img:{
    width:"50%",
    height:"50%",
    marginLeft:"25%",
    marginBottom:"10%"
  },
  descripe:{
    color:"#676767"
  },
  price:{
    color:"red"
  }
});
