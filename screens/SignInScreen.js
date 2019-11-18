import React from "react";
import { Container, Item, Form, Input, Button, Label, Text } from "native-base";
import { StyleSheet } from "react-native";
import firebase from "firebase";

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  _onSignIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate("Home");
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(
            "error code: ",
            errorCode,
            " || error message: ",
            errorMessage
          );
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  _onSignUpClick = () => {
    this.props.navigation.navigate("SignUp");
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
            onPress={() =>
              this._onSignIn(this.state.email, this.state.password)
            }
          >
            <Text>Sign In</Text>
          </Button>
          <Button full rounded onPress={() => this._onSignUpClick()}>
            <Text>Sign Up</Text>
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

export default SignInScreen;
