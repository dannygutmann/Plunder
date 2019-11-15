import firebase from "firebase";
import { Card, Text } from "native-base";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Lots of features here"
  };

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card title="John Doe">
          <View
            style={{
              backgroundColor: "#bcbec1",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 40,
              alignSelf: "center",
              marginBottom: 20
            }}
          >
            <Text style={styles.text}>JD</Text>
          </View>
          <Button
            backgroundColor="#03A9F4"
            title="SIGN OUT"
            onPress={() => this._onSignOut()}
          />
        </Card>
      </View>
    );
  }

  _onSignOut = async () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Login");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: { color: "white", fontSize: 28 }
});

export default ProfileScreen;
