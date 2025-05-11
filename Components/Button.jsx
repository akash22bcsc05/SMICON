import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={{
                ...styles.button,
            }} 
            onPress={props.onPress}
        >
            <Text style={{ fontSize: 18, color: props.textColor }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: 'primary', // Assuming 'primary' is a variable or theme color
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1, // Add borderWidth to show borderColor
    },
});

export default Button;
