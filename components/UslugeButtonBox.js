import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

import {ListItem } from '@react-native-material/core';


const UslugeButtonBox = (prop) => {
    const [odabran, setOdabran] = useState(false);


    const dodajUslugu = () => {
        const odabrano = prop.listaDodanihUsluga.some(el => el.ime === prop.title);

        if (odabrano) {
            setOdabran(false)
            prop.setListDodanihUsluga(prop.listaDodanihUsluga.filter(el => el.ime != prop.title));
            prop.setTrosak(prop.trosak - prop.cijena);
            return
        }

        setOdabran(true)
        prop.setListDodanihUsluga([...prop.listaDodanihUsluga, { ime: prop.title, cijena: prop.cijena }]);
        prop.setTrosak(prop.trosak + prop.cijena);
    }

    return (
        <ListItem
            title={prop.title}
            meta={`${prop.cijena} €`}
            onPress={dodajUslugu}
            trailing={odabran && <Ionicons name='checkmark' size={15} />}
        />
    )
}

export default UslugeButtonBox

const styles = StyleSheet.create({})