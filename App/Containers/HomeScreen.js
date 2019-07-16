import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import { connect } from "react-redux";
// import FullButton from "../Components/FullButton";
import ButtonRounded from "../Components/ButtonRounded";
import RoundedButton from "../Components/RoundedButton";
import BodyHome from "../Components/BodyHome";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomePage</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <BodyHome />
          <ButtonRounded
            moveToPage2={() => this.props.navigation.navigate("Page2Screen")}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
