import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Alert, Image } from 'react-native'
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
  Stack,
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

  return (
    <Card>
      <Center>
        <Text style={[globalStyles.titulo, { paddingVertical: 10 }]}>Resumen Pedido</Text>
      </Center>
      <>
        {pedido.map(platillo => {
          const { cantidad, nombre, imagen, id, precio, total } = platillo;
          return (
            <View key={id}>
              <Stack space={3} >
                <HStack space={3} alignItems="center">
                  <Image style={{
                    height: 100,
                    width: 100
                  }} resizeMode="contain" source={{
                    uri: imagen
                  }} alt="Alternate Text" size="xs" />

                  <VStack
                    space={1}
                    divider={<Divider />}
                    w="90%"
                  >
                    <HStack>
                      <Text>{nombre}</Text>
                    </HStack>
                    <HStack>
                      <Text>Cantidad: {cantidad}</Text>
                    </HStack>
                    <HStack>
                      <Text>Precio: {precio}</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Stack>
            </View>
          );
        })}

        <Text style={globalStyles.cantidad}>Total a Pagar: S/. </Text>
      </>
    </Card>
  )
}

export default ResumenPedido

const styles = StyleSheet.create({})