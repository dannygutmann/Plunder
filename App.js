import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";
import FireBase from "./Firebase/firebase";

//Loads Firebase info
FireBase;

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

// import React from "react";
// import FireBase from "./Firebase/firebase";
// import { createRootNavigator } from "./router";
// import { isSignedIn } from "./auth";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //Loads Firebase info
//     FireBase;
//     this.state = {
//       signedIn: false,
//       checkedSignIn: false
//     };
//   }

//   componentDidMount() {
//     isSignedIn()
//       .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
//       .catch(err => alert("An error occurred!"));
//   }

//   isSignedIn() {
//     return new Promise((resolve, reject) => {
//       AsyncStorage.getItem(USER_KEY)
//         .then(res => {
//           if (res !== null) {
//             resolve(true);
//           } else {
//             resolve(false);
//           }
//         })
//         .catch(err => reject(err));
//     });
//   };

//   render() {
//     const { checkedSignIn, signedIn } = this.state;

//     // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
//     if (!checkedSignIn) {
//       return null;
//     }

//     const Layout = createRootNavigator(signedIn);
//     return <Layout />;
//   }
// }

export default App;
