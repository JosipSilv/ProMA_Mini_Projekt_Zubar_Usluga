import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonBox = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            {props.ikona}
            <Text style={{color: '#928DD4'}}>{props.naslov}</Text>
        </TouchableOpacity>
    )
}

export default ButtonBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})