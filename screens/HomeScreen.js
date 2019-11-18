import firebase from "firebase";
import { Card, CardItem, Text, Button } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Page"
  };

  render() {
    return (
      <View style={styles.outerView}>
        <Card title="Home Title">
          <CardItem
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
          </CardItem>
          <Button style={styles.button} onPress={() => this._onSignOut()}>
            <Text style={styles.button}>Sign Out</Text>
          </Button>
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
  text: { color: "white", fontSize: 28 },
  button: {
    backgroundColor: "#03A9F4",
    justifyContent: "center"
  },
  outerView: {
    paddingVertical: 40
  }
});

export default HomeScreen;
