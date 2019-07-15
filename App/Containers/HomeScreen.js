import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import FullButton from "../Components/FullButton";
import RoundedButton from "../Components/RoundedButton";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text>HomeScreen</Text>
          <FullButton />
          <Text>Click</Text>
          <RoundedButton
            moveToPage2={() => this.props.navigation.navigate("Page2Screen")}
          />
        </KeyboardAvoidingView>
      </ScrollView>
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
