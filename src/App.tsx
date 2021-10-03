import React from "react";
import { StatusBar } from "react-native";

import Navigator from "~/Screens/Navigator";
import { UserContextProvider } from "~/Contexts/User";
import {RandomUserDataProvider} from "~/Contexts/RandomUserData"

interface Props {}

const App = ({}: Props) => {
  return(
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar barStyle="default" />
        <Navigator />
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};
export default App;