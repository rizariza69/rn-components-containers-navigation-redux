import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import SignupScreen from "../Containers/SignupScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    LaunchScreen: { screen: LaunchScreen },
    SignupScreen: { screen: SignupScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "main",
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
