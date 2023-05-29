import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MenuOrderedScreen = ({navigation}) => {
    return <View style={{backgroundColor: 'black', flex: 1}}>
        <Text style={{color: '#F7941D', textAlign:'center', marginTop: 50, fontSize: 18, fontWeight: 'bold'}}>Choose Kigali</Text>
        <View style={styles.topNav}>
            <TouchableOpacity style={{paddingRight: 30}}>
                <Image source={require('../assets/orderIcon.png')}/> 
                <Text>N8</Text>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Ordered</Text>
            </TouchableOpacity>
            <View style={{width: 1, height: 70, backgroundColor: '#F7941D'}}/>
            <TouchableOpacity style={{paddingLeft: 30}}>
                <Image source={require('../assets/waiterIcon.png')}/>
                <Text style={{color: 'white', fontSize: 15}}>Call waiter</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    topNav: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        marginTop: 20
    }
})

export default MenuOrderedScreen;