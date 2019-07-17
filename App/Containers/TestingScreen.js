import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import GetDataRedux from "../Redux/GetDataRedux";
// Styles
import styles from "./Styles/TestingScreenStyle";

class TestingScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    getData: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      doLoad: false
    };
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    asyncStorage.getItem("token").then(token => {
      this.setState({
        doLoad: true
      });
      this.props.getData(token);
    });
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(newProps) {
    if (this.state.doLoad == true) {
      if (newProps.fetching == false) {
        this.setState({
          doLoad: false,
          notif: newProps.message,
          error: newProps.error
        });
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text>{this.state.notif}</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    // fetching: state.getData.fetching,
    // error: state.getData.error,
    // data: state.getData.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: token => dispatch(GetDataRedux.getDataRequest(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestingScreen);
