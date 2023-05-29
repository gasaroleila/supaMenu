import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import LinkText from "../components/LinkText";

const SignupScreen = ({navigation}) => {

    const[fullName, setFullName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = () => {
        console.log('Signup: ', fullName, email)
    }
    
    return <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.mainText}>
                Supa<Text style={styles.spanText}>Menu</Text>
            </Text>
            <Text style={styles.welcome}>Welcome...</Text>
            <Text style={styles.grayText}>Please fill in the information</Text>

            <TextInput 
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <TextInput 
                style={styles.input}
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
            />
            <CustomButton title="Proceed" onPress={handleSubmit}/>
            <Text style={styles.or}>OR</Text>
            <Text style={styles.grayText}>If you have a PMG account</Text>
            <CustomButton title="Sign In" onPress = {() => navigation.navigate('Login')}/>
            <Text style={styles.register}>
                Don't have account? <Text style={styles.spanText} onPress = {() => navigation.navigate('Signup')}>Register</Text>
            </Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7941D'
    },
    subContainer: {
        backgroundColor: 'white',
        color: 'black',
        marginTop: 70,
        borderRadius: 20,
        height: '100%'
    },
    mainText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 95,
        padding: 4
    },
    spanText:{
        color:'#F7941D'
    },
    welcome: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'darkblue',
        marginLeft: 145,
        paddingTop: 15,
        paddingBottom: 6
    },
    grayText: {
        fontSize: 11,
        color:'gray',
        marginLeft: 120,
        marginBottom: 20
    },
    input: {
        width: '90%',
        height: 40,
        fontSize: 12,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 5,
        marginLeft: 20
    },
    or:{
        fontWeight: 'bold',
        fontSize: 12,
        color:'gray',
        marginLeft: 170,
        marginBottom: 10,
        marginTop: 10,
    },
    register:{
        fontSize: 11,
        color:'gray',
        marginLeft: 120,
        marginTop: 10,
        marginBottom: 50,
    }
});

export default SignupScreen;