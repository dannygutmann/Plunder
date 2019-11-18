import React from "react";
import { Container, Item, Form, Input, Button, Label, Text } from "native-base";
import { StyleSheet } from "react-native";
import firebase from "firebase";

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this._onSignUp = this._onSignUp.bind(this);
  }

  _onSignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
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
            success
            style={{ marginTop: 20 }}
            onPress={() =>
              this._onSignUp(this.state.email, this.state.password)
            }
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

export default SignUpScreen;
