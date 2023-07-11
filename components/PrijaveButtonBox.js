import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ListItem } from '@react-native-material/core';

const PrijaveButtonBox = (prop) => {
    return (
        <ListItem
            title={prop.ime}
            meta= {prop.datum}
            onPress={prop.onPress}
        />
    )
}

export default PrijaveButtonBox

const styles = StyleSheet.create({})