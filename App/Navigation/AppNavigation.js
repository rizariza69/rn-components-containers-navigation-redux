import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import LaunchScreen from "../Containers/LaunchScreen";
import SignupScreen from "../Containers/SignupScreen";
import HomeScreen from "../Containers/HomeScreen";
import Page2Screen from "../Containers/Page2Screen";
import FooterScreen from "../Containers/FooterScreen";
import TestingScreen from "../Containers/TestingScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    LaunchScreen: { screen: LaunchScreen },
    SignupScreen: { screen: SignupScreen },
    HomeScreen: { screen: HomeScreen },
    Page2Screen: { screen: Page2Screen }
    // TestingScreen: { screen: TestingScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    title: "main",
    initialRouteName: "LoginScreen",
    navigationOptions: {
      headerStyle: styles.header
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: false,
    tabBarComponent: props => {
      return <FooterScreen navigation={props.navigation} />;
    }
  }
);

export default createAppContainer(PrimaryNav);
