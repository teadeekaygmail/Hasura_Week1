import React, { Component } from 'react';
import { Container, Content, View, Left, Body, Button, Text, Thumbnail, Card, CardItem } from 'native-base';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';


export default class Tab4 extends Component {
  render() {
    return(

      <Content>
      <Card style={{paddingRight : 10}}>
        {/* top  of card content */}
        <CardItem >
          <Left>
            <Thumbnail source={require('./img/contacts/cute_dog.jpg')} />
            <Body style ={{flexDirection: 'row'}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.nameText}>Tushar Kenavdekar</Text>
                  <Icon name="check" style={{fontSize: 20, color: '#197DC8', alignSelf: 'center'}}/>
                  <Text note> @tushar.. </Text>
                  <Text note>4h</Text>
                </View>
                <Text style={styles.contentText}> I think being a dragon would be pretty awesome... you get to fly.</Text>
              </View>
              <Icon name='chevron-down' style={styles.iconStyle}/>
            </Body>
          </Left>
        </CardItem>

        {/* main body picture */}
        <CardItem>
        <Left>
            <Body>
              <Image source={require('./img/drawer-cover.png')} style={{height: 170, width: 250, alignSelf:'flex-end', borderRadius: 10}}/>
            </Body>
            </Left>
        </CardItem>

        {/* bottom of card content */}
        <CardItem>

          <Left />
          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="comment" style={styles.iconStyle} />
            <Text style={styles.textStyle}> 141 </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
              <Icon name="retweet" style={styles.iconStyle} />
              <Text style={styles.textStyle} > 55 </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" style={styles.iconStyle} />
            <Text style={styles.textStyle}> 10k </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="envelope" style={styles.iconStyle} />
            </View>
          </TouchableOpacity>
          </Body>


        </CardItem>
      </Card>





      <Card style={{paddingRight : 10}}>
        {/* top  of card content */}
        <CardItem >
          <Left>
            <Thumbnail source={require('./img/contacts/whatsapp-profile.jpg')} />
            <Body style ={{flexDirection: 'row'}}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.nameText}>Sophia</Text>
                  <Icon name="check" style={{fontSize: 20, color: '#197DC8', alignSelf: 'center'}}/>
                  <Text note> @sophia.. </Text>
                  <Text note>7h</Text>
                </View>
                <Text style={styles.contentText}> I think it's important that everyone understands that there's no real prescription to having an awesome life.</Text>
              </View>
              <Icon name='chevron-down' style={styles.iconStyle}/>
            </Body>
          </Left>
        </CardItem>

        {/* main body picture */}
        <CardItem>
        <Left>
            <Body>
              <Image source={require('./img/swiper-1.png')} style={{height: 170, width: 250, alignSelf:'flex-end', borderRadius: 10}}/>
            </Body>
            </Left>
        </CardItem>

        {/* bottom of card content */}
        <CardItem>

          <Left />
          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="comment" style={styles.iconStyle} />
            <Text style={styles.textStyle}> 171 </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
              <Icon name="retweet" style={styles.iconStyle} />
              <Text style={styles.textStyle} > 95 </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" style={styles.iconStyle} />
            <Text style={styles.textStyle}> 12k </Text>
            </View>
          </TouchableOpacity>
          </Body>

          <Body>
          <TouchableOpacity transparent>
          <View style={{flexDirection: 'row'}}>
            <Icon name="envelope" style={styles.iconStyle} />
            </View>
          </TouchableOpacity>
          </Body>


        </CardItem>
      </Card>




      </Content>
    );
  }
 }


const styles = {
    textStyle: {
      color: '#747777',
      fontSize: 11,
      alignSelf: 'center'
    },
    iconStyle: {
        color: "#747777",
        fontSize: 25,
        fontWeight: 'bold',
    },
    nameText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    contentText: {
      color: '#2B2D2E'
    }
};
