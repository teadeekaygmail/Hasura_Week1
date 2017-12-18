import React, { Component } from 'react';
import { Image ,View} from 'react-native';
import { Container, Card, CardItem, Text, Icon, Right, Footer, FooterTab, Button, Left, Thumbnail, Body } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
         <Card>

           <CardItem>
              <Left>
                <Thumbnail source={require('./img/contacts/nickbunyun.png')} />
              </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>John Doe</Text>
              <Text note>@johndoe</Text>
            </Body>
            <Right>
              <Icon active name="ios-arrow-down" />
            </Right>
          </CardItem>

          <CardItem >
            <Left>
              <Text>500</Text>
              <Text note>Following</Text>
            </Left>
            <Left>
              <Text>10k</Text>
              <Text note>Followers</Text>
            </Left>
          </CardItem>

          <CardItem style={{

borderTopColor: 'grey',
borderTopWidth: 1
          }}  >
              <Icon name="ios-person-outline" />
              <Text>Profile</Text>
          </CardItem>
          <CardItem>
               <Icon name="ios-list-box-outline" />
               <Text>Lists</Text>
          </CardItem>
          <CardItem>
                <Icon name="ios-flash-outline" />
                <Text>Moments</Text>
          </CardItem>
          <CardItem style={{
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
          }}>
                 <Icon name="ios-browsers-outline" />
                 <Text>Highlights</Text>
          </CardItem>




          <CardItem style={{
            paddingTop: 20
          }}>
                   <Text>Settings and privacy</Text>
          </CardItem>

          <CardItem >
                   <Text>Help Centre</Text>
          </CardItem>




        <Footer style={{backgroundColor:"white", marginTop: 25 }} >
            <Left>
            <Icon style={{ marginLeft: 20,color: '#3BB9FF'}} name='ios-moon-outline' ></Icon>
            </Left>
            <Right>
            <Icon style={{ marginRight: 20,color: '#3BB9FF' }} name='ios-qr-scanner-outline'></Icon>
            </Right>

        </Footer>
      </Card>
    </Container>

    );
  }
}
