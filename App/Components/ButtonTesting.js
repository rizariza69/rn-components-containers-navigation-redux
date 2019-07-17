import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Container, Button } from "native-base";
import { View, Text } from "react-native";
import styles from "./Styles/ButtonTestingStyle";

export default class ButtonTesting extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <Container
        style={{
          borderWidth: 1,
          borderColor: "green"
        }}
      >
        <Button
          rounded
          warning
          style={styles.container}
          onPress={this.props.moveToTesting}
        >
          <Text>To Testing</Text>
        </Button>
      </Container>
    );
  }
}
