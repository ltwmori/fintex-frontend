import * as React from 'react';
import { StyleSheet, Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ButtonLogin from './ButtonLogin';

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{flex: 1,backgroundColor: "#171930"}}>
    <View style={styles.header}>
				<Text style={styles.headerText}>Login to Fintex</Text>
			</View>
      <View style={{ padding: 10,}}>
        <Text style={styles.textBefore}>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder=""
            value={username}
            onChangeText={setUsername}
          />
        </View>
    <View style={{ padding: 10}}>
        <Text style={styles.textBefore}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder=""
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      {/*button*/}
			<TouchableOpacity
				style={styles.button}
				onPress={() => signIn({ username, password })}><Text style={styles.signIn}>Sign in</Text>
			</TouchableOpacity>

      <View style={styles.signUp}>
				<TouchableOpacity
					//onPress={() => navigation.navigate('Register')}
				>
				    <Text style={styles.signUpText}>I’m a new user. Registration</Text>
				</TouchableOpacity>
			</View>

    </View>

  );
}

const Stack = createStackNavigator();

export default function Login({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                headerShown: false,
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  header:{
    marginHorizontal: 10,
		marginTop: '40%',
    paddingBottom: 30
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: 27,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 34,
    color: "#FFFFFF"
	},
  button:{
    backgroundColor: "#3265B8",
    opacity: 0.7,
    justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 24,
		marginTop: 35,
		borderRadius: 8,
		height: 56,
  },
  signUpText:{
    height: 15,
    opacity: 0.4,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 15,
    color: "#FFFFFF"
  },
  signUp: {
		marginTop: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},

  signIn :{
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF"
  },
  textBefore:{
    // width: 58,
    // height: 19,
    opacity: 0.4,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 19,
    color: "#FFFFFF",
    // textAlign: 'left',
  },
  textInput: {
    //width: 133,
    //height: 19,
    padding: 10,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    // lineHeight: 19,
    color: "#FFFFFF",
    //width: 335,
    maxWidth:350,
    height: 52,
    borderRadius: 8,
    backgroundColor: "#242547",
    borderWidth: 0,
    borderColor: "rgba(112, 112, 112, 1.0)",
    // textAlign: "center",
  
    },
    
});