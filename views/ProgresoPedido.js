import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import PedidoContext from '../context/pedidos/pedidoContext'
import firebase from '../firebase'

const ProgresoPedido = () => {

  const { idpedido } = useContext(PedidoContext);

  const [tiempo, guardarTiempo] = useState(0)

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db.collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function (doc) {
          guardarTiempo(doc.data().tiempoentrega)
        })

    }
    obtenerProducto();
  }, []);

  return (
    <View>
      <Text>{idpedido}</Text>
      <Text>{tiempo}</Text>
    </View>
  )
}

export default ProgresoPedido

const styles = StyleSheet.create({})