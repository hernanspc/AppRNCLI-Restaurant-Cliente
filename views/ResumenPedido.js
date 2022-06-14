import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Pressable,
  Body,
  Text,
  H1,
  Box,
  Heading,
  Card,
  CardItem,
  Center,
  HStack,
  Form,
  Icon,
  Input,
  Grid,
  SimpleGrid,
  Col, Divider,
  Button,
  VStack,
  AddIcon,
  MinusIcon,
  FlatList,
  useBreakpointValue
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { formatUSD } from '../utils/functions'

import PedidoContext from '../context/pedidos/pedidoContext'
import globalStyles from '../styles/global'

const ResumenPedido = () => {

  // context de pedido
  const { pedido } = useContext(PedidoContext);
  console.log('pedido ', pedido);

  return (
    <Card>
      <Center>
        <Text style={[globalStyles.titulo, { paddingVertical: 10 }]}>Resumen Pedido</Text>
      </Center>
      {pedido.map(platillo => {
        const { cantidad, nombre, imagen, id, precio } = platillo;
        return (
          <View key={id}>
            <Text> Hola {cantidad} </Text>
          </View>

        );
      })}
    </Card>
  )
}

export default ResumenPedido

const styles = StyleSheet.create({})