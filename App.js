import React from "react";
import StackNavigator from "./route/StackNavigator";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs()
export default function App() {

  return (

    <StackNavigator/>
  );
}
