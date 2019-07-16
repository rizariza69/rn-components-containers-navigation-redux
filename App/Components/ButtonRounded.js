import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Container, Button } from "native-base";
import { View, Text } from "react-native";
import styles from "./Styles/ButtonRoundedStyle";

export default class ButtonRounded extends Component {
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
          success
          style={styles.container}
          onPress={this.props.moveToPage2}
        >
          <Text>Next</Text>
        </Button>
      </Container>
    );
  }
}
