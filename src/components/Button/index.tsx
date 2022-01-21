import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface ButtonProps {
    text: string;
    onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e46911',
        marginVertical: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,

    },
    text: {
        fontSize: 16,

    },
});

export default Button
