import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LinkText = ({text, onPress}) => {
    return <View>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    text: {
        color: '#F7941D',
        fontSize: 11
    }
})

export default LinkText;