import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Tipka = (prop) => {
  return (
    <TouchableOpacity onPress={prop.onPress} disabled={prop.isDisabled} style={styles.stilTipka}>
        <Text style={styles.buttonTextStil}>{prop.tekst}</Text>
    </TouchableOpacity>
  )
}

export default Tipka

const styles = StyleSheet.create({
  stilTipka: {
    backgroundColor: '#928DD4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13
  },
  buttonTextStil: {
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
})