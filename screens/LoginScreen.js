import React from "react";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { StyleSheet, Text } from "react-native";
import firebase from "firebase";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  SignIn = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(user => {
        alert(user.email);
      });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  SignUp = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            full
            rounded
            onPress={() => this.SignIn(this.state.email, this.state.password)}
          >
            <Text>Sign In</Text>
          </Button>
          <Button
            full
            rounded
            success
            style={{ marginTop: 20 }}
            onPress={() => this.SignUp(this.state.email, this.state.password)}
          >
            <Text>Signup</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

export default LoginScreen;
