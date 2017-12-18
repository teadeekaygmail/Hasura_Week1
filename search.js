import React,{Component} from 'react';
import { Text } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class Search extends Component {

  render(){

    return (
         <Container>

        <Header searchBar  style={{backgroundColor: 'white'}} >


          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Twitter" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>


        </Container>
      );
    }
  }
