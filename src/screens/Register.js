import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const {isLoading, login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.h1}>
        <Text style={styles.h1Text}>
          Register
        </Text>
      </View>
      {/* <Spinner visible={isLoading} /> */}
      <View style={styles.wrapper}>
        {/* <Text style={styles.usr}>Username</Text> */}
        <TextInput
          style={styles.input}
          placeholderTextColor="gray"
          value={username}
          placeholder="Enter username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="gray"
          value={username}
          placeholder="Enter email"
          onChangeText={text => setUsername(text)}
        />
        {/* <Text style={styles.usr}>Password</Text> */}
        <TextInput
          style={styles.input}
          placeholderTextColor="gray"
          value={password}
          placeholder="Enter password"
         onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.log}>
          <Text style={{fontWeight: '500', color: 'white', fontSize: 12,}}>Register</Text>
        </TouchableOpacity>
        

        <View style={styles.reg}>
          <Text style={{color:"gray"}}>I have an account. </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#171930",
  },
  h1: {
    marginBottom: 40,
  },
  h1Text: {
    fontWeight: '700',
    fontSize: 27,
    color: '#fff',
    
  }, 
  wrapper: {
    width: '90%',
  },
  usr: {
    color: "gray",
    marginBottom: 10,
    paddingHorizontal: 21,
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 40,
    color: "white",
  },
  link: {
    color: 'blue',
  },
  log: {
    backgroundColor: "#266ED7",
    width: '100%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 8,
  },
  reg: {
    justifyContent: "center", 
    flexDirection: 'row', 
    marginTop: 20, 

  }
});

export default Login;