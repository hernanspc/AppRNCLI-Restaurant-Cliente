import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import PedidoContext from '../context/pedidos/pedidoContext'

const ProgresoPedido = () => {

  const { idpedido } = useContext(PedidoContext);

  return (
    <View>
      <Text>{idpedido}</Text>
    </View>
  )
}

export default ProgresoPedido

const styles = StyleSheet.create({})