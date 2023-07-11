import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

//import listaPrijava from '../data/ListaPrijava';
import PrijaveButtonBox from '../components/PrijaveButtonBox';

import { useSelector } from 'react-redux';

const EkranPrijave = (prop) => {
  const listaPrijava = useSelector(state => state.dental.prijave);


  const pregledajPrijavu = (o) => {
    //setPrijavaContent(o);
    prop.navigation.navigate('PrijavaDetalji', {
      id: o.key,
      ime: o.ime,
      datum: o.datum,
      lstUsluga: o.us,
      ukupniTrosak: o.ukupniTrosak
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {listaPrijava.map((it) => {
          return <PrijaveButtonBox ime={it.ime} datum={it.datum} listaUsluga={it.us} onPress={() => pregledajPrijavu(it)} />
        })}
      </View>
    </View>
  )
}

export default EkranPrijave

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  listContainer: {
    width: Dimensions.get('screen').width - 50,
    flexGrow: 0,
    paddingVertical: 20,
    marginBottom: 20
  },
  uslugeStil: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: 250
  },
  modalStil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalContentStil: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: 'white',
    width: '80%'
  },
})