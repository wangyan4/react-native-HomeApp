import React ,{useEffect,useState}from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  ToastAndroid,
  AsyncStorage,
  Modal
} from 'react-native';
import {Router,Scene,Stack,Tabs,Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Feather';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/Home/Home';
import List from './src/List/List';
import Shop from './src/Shop/Shop';
import My from './src/My/My';
import Publish from './src/My/Publish';
import SwiperPage from './src/common/SwiperPage';
import Login from './src/common/Login';
import Register from './src/common/Register';
console.disableYellowBox = true;

const App = () => {
  let [isLogin,setLogin]=useState(false);
  let [isInstall,setInstall]=useState(true);
  let now=0;
  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('isInstall')
      .then(res=>{
        if(!!res){
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
    .then(res=>{
      let user = JSON.parse(res);
      if(user&&user.token){
        setLogin(true);
        SplashScreen.hide();
      }
      if(!user){
        SplashScreen.hide();
      }
      })
  }, [])
  let get=()=>{
    setInstall(false);
  }
  if(isInstall){
    return <View>
    <SwiperPage getbool={get}/>
  </View>
  }
  return (
    <>
      <StatusBar  backgroundColor="#f23030"/>
        <Router
           backAndroidHandler={()=>{
             if(Actions.currentScene != 'login' && Actions.currentScene != 'homepage'){
              Actions.pop();
              return true;
            }else{
              if(new Date().getTime()-now<2000){
                BackHandler.exitApp();
              }else{
                ToastAndroid.show("你真的要退出吗",10);
                now = new Date().getTime();
                return true;
              }
            }
          }}
        >
          <Modal key="modal" hideNavBar>
          <Scene key="root">
            <Tabs key='tab'
                  hideNavBar
                  activeTintColor="#f23030"
                  inactiveTintColor="#949494"
            >
              <Scene key='home'
                     title="主页"
                     hideNavBar
                     icon={({focused})=><Icon color={focused ? "#f23030" : "#949494"} style={{fontSize:22}} name="home"/>}
              >
                <Scene key='homepage' component={Home}/>
              </Scene>

              <Scene key='list'
                     title='商品分类'
                     hideNavBar
                     icon={({focused})=><Icon color={focused ? "#f23030" : "#949494"} style={{fontSize:22}} name="grid"/>}
              >
                <Scene key ='listpage' component={List}/>
              </Scene>

              <Scene  key='shop'
                      title="商城" 
                      hideNavBar
                      icon={({focused})=><Icon color={focused ? "#f23030" : "#949494"} style={{fontSize:22}} name="shopping-cart"/>}
              >
                <Scene key ='shoppage' component={Shop}/>
              </Scene>

              <Scene key='my'
                     title='我的'
                     titleStyle={{flex:1, textAlign:"center", color:"#fff", backgroundColor:"#F23030"}}
                     navigationBarStyle={{backgroundColor:"#f23030"}}
                     navBarButtonColor="#fff"
                     renderRightButton={<Icon name="more-horizontal" size={20} style={{marginRight:20,color:"#fff"}}/>}
                     icon={({focused})=><Icon color={focused ? "#f23030" : "#949494"} style={{fontSize:22}} name='user'/>}
              >
                <Scene key='mypage' hideNavBar component={My}/>
                <Scene key='publish' hideTabBar title ='我的发布' component={Publish}/>
              </Scene>
            </Tabs>
          </Scene>
          <Scene key="login" initial={!isLogin} component={Login}/>
          <Scene key  ='register' component={Register}/>
        </Modal>
        </Router> 
    </>
  );
};

export default App;
