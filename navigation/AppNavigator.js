import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import AppSelectionScreen from "../screens/AppSelectionScreen";

const AppNavigator = createStackNavigator({});

export default createAppContainer(AppNavigator);
