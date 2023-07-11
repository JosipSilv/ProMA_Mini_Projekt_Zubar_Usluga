import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

import Tipka from '../components/Tipka';

import { useDispatch } from 'react-redux';
import { otkaziTerminHandler } from '../store/actions/Dental';

const PrijavaDetalji = (prop) => {
    const [idPrijave, setIdPrijave] = useState(prop.route.params.id);
    const [listaUsluga, setListaUsluga] = useState(prop.route.params.lstUsluga);
    const [ime, setIme] = useState(prop.route.params.ime);
    const [datum, setDatum] = useState(prop.route.params.datum);
    const [ukupno, setUkupno] = useState(prop.route.params.ukupniTrosak)

    const dispatch = useDispatch();

    const otkaziHandler = () => {
        dispatch(otkaziTerminHandler(idPrijave))
        prop.navigation.pop();
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentStil}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: '300' }}>Ime: {ime} {'\n'}
                        Datum: {datum} {'\n'}
                    </Text>
                </View>
                <View style={{ maxHeight: '50%', alignItems: 'center' }}>
                    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                        {listaUsluga.map((it) => (
                            <Text style={{ fontSize: 18, fontWeight: '100' }}>
                                {it.ime}
                            </Text>
                        ))}
                    </ScrollView>

                    <Text style={{ fontSize: 20, fontWeight: '200' }}>Ukupno: {ukupno}€</Text>
                </View>

                <View style={{ marginVertical: 30, width: '80%' }}>
                    <Tipka tekst={'Otkaži'} onPress={otkaziHandler} />
                </View>

            </View>
        </View>
    )
}

export default PrijavaDetalji

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },
    contentStil: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 20,
        backgroundColor: 'white',
        width: '80%'
    },
})