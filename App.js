/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';



import Home from './home';
import Sidebar from './sidebar';
import Search from './search';
import Tab4 from './tabfour';

import { Container, Header, Left, Body, Right, Button, Icon, Title,
Text, Tab, Tabs, TabHeading, Fab, Drawer, ScrollableTab,
View, Content, Card, CardItem, Thumbnail, Footer, FooterTab } from 'native-base';

import {
  Platform,
  StyleSheet, TouchableOpacity
} from 'react-native';



export default class App extends Component {
    closeDrawer = () => {
        this._drawer._root.close()
      };
      openDrawer = () => {
        this._drawer._root.open()
};
  render() {
    return (



      <Container>
      <Drawer
           ref={(ref) => { this._drawer = ref; }}
           content={<Sidebar
              navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} >



  <Header hasTabs style={{backgroundColor: "white"}}>
             <Left>
               <Button transparent  onPress={() => this.openDrawer()}>
                   <Thumbnail small source={require('./img/contacts/nickbunyun.png')} />
               </Button>
             </Left>

             <Body>

                 <Title style={{color: "black",alignContent: 'flex-start'}} >Home</Title>

             </Body>
             <Right />
         </Header>

         <Tabs initialPage={0}
           tabBarUnderlineStyle={{backgroundColor:'#3BB9FF',borderBottomWidth:0}} >
               <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="md-home" style={{color:'#3BB9FF'}} /></TabHeading> } >
          <Home />
                 </Tab>

               <Tab heading={ <TabHeading style={{backgroundColor:'white'}} ><Icon name="search" style={{color:'#3BB9FF'}} /></TabHeading> } >
          <Search />
               </Tab>

               <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="notifications" style={{color:'#3BB9FF'}}/></TabHeading> }>
{/*<Tab3 />*/}
               </Tab>

               <Tab heading={ <TabHeading style={{backgroundColor:'white'}}><Icon name="mail" style={{color:'#3BB9FF'}} /></TabHeading> }>
                  {/*<Tab4 />*/}
               </Tab>
 </Tabs>





  <Footer style={{backgroundColor: 'white'}}>
              <FooterTab style={{backgroundColor: 'white'}}>
                <TouchableOpacity transparent style={{marginLeft: 20, justifyContent: 'center'}}>
                  <Text style={styles.iconColor}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity transparent style={{paddingLeft: 15, justifyContent: 'center'}}>
                  <Text style={{color: '#acafaf'}}>Mentions</Text>
                </TouchableOpacity>
                <Right>
                  <TouchableOpacity transparent style={{marginRight: 20}} >
                    <Icon name="settings" size={25} style={styles.iconColor} />
                  </TouchableOpacity>
                </Right>
              </FooterTab>
  </Footer>





  <Fab style={{ backgroundColor: '#3BB9FF', marginBottom:50 }} position="bottomRight">
              <Icon name="logo-twitter" />

  </Fab>

</Drawer>

</Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  iconColor: {
    color: '#197DC8'
}
});
