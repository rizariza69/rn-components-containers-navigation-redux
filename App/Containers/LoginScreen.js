import React, { Component } from "react";
import { View, ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import Login from "../Components/Login";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/LoginScreenStyle";

class LoginScreen extends Component {
  componentDidMount() {}
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Login
            pindah={() => this.props.navigation.navigate("SignupScreen")}
            moveHomeScreen={() => this.props.navigation.navigate("HomeScreen")}
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
)(LoginScreen);
