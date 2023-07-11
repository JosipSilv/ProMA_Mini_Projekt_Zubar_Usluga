import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React from 'react'
import ButtonBox from '../components/ButtonBox'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const EkranHome = (prop) => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <ButtonBox ikona={<MaterialCommunityIcons name='tooth-outline' size={65} color={'#211E4F'}/>} naslov='Usluge' onPress = {() => prop.navigation.navigate('Usluge')} />
                <ButtonBox ikona={<MaterialIcons name='description' size={65} color={'#211E4F'} />} naslov='O nama' />
            </View>
        </View>
    )
}

export default EkranHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: StatusBar.currentHeight
    },
    buttonContainer: {
        flexDirection: 'row'
    },
})