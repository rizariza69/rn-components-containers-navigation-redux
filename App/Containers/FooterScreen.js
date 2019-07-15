import React, { Component } from "react";
import { Footer, FooterTab, Icon, Text, Button } from "native-base";
import { StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/FooterScreenStyle";

class FooterScreen extends Component {
  render() {
    let { navigate } = this.props.navigation;
    return (
      <Footer>
        <FooterTab style={style.bg}>
          <Button vertical onPress={() => this.navigate("HomeScreen")}>
            <Text>HomeScreen</Text>
          </Button>
          <Button vertical onPress={() => this.navigate("Page2Screen")}>
            <Text>Page2</Text>
          </Button>
        </FooterTab>
      </Footer>
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
)(FooterScreen);
