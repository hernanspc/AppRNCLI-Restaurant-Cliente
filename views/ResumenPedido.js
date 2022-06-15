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
  useBreakpointValue,
  ScrollView
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { formatUSD } from '../utils/functions'

import PedidoContext from '../context/pedidos/pedidoContext'
import globalStyles from '../styles/global'

const ResumenPedido = () => {

  const navigation = useNavigation();

  // context de pedido
  const { pedido, total, mostrarResumen } = useContext(PedidoContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 0;
    nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0)
    mostrarResumen(nuevoTotal)
  }

  // Redirecciona a progreso pedido
  const progresoPedido = () => {
    Alert.alert(
      'Revisa tu pedido',
      'Una vez que realizas tu pedido, no podrás cambiarlo',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            navigation.navigate('ProgresoPedido');
          }
        },
        {
          text: 'Revisar',
          style: 'cancel'
        }
      ]
    )

  }

  return (
    <>
      <Card>

        <ScrollView >
          <Center>
            <Text style={[globalStyles.titulo, { paddingVertical: 10 }]}>Resumen Pedido</Text>
          </Center>

          {pedido.map((platillo, i) => {
            const { cantidad, nombre, imagen, id, precio, total } = platillo;
            return (
              <View key={id + i} style={{ marginBottom: 20 }}>
                <Stack space={2} >
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
                        <Text>Precio: {formatUSD(precio)}</Text>
                      </HStack>
                      <HStack>
                        <Button
                          // style={{ width: '100%' }}
                          colorScheme="danger"
                          style={{
                            textAlign: "center", width: '80%',
                          }}
                        // style={[globalStyles.botonTexto, { color: '#FFF' }]}
                        >
                          <Text style={{ color: '#FFF', }}>Eliminar</Text>
                        </Button>

                      </HStack>
                    </VStack>
                  </HStack>
                </Stack>
              </View>
            );
          })}

          <Text style={[globalStyles.cantidad, { marginTop: 10 }]}>Total a Pagar: S/. {formatUSD(total)} </Text>

          <Button
            onPress={() => navigation.navigate('Menu')}
            style={[{ marginTop: 30, marginBottom: 100, backgroundColor: '#000' }]}
            full
          >
            <Text style={[globalStyles.botonTexto, { color: '#FFF' }]}>seguir pidiendo</Text>
          </Button>
        </ScrollView>

      </Card>

      <HStack
        space={1}
        style={{ position: 'absolute', bottom: 0, }}
      >
        <Box
          style={{ width: '100%', height: '100%' }}
        >
          <Button style={globalStyles.boton}
            onPress={() => progresoPedido()}
          >
            <Text style={[globalStyles.botonTexto, { marginTop: 5, marginBottom: 5 }]}>Ordenar pedido</Text>
          </Button>
        </Box>
      </HStack>

    </>

  )
}

export default ResumenPedido

const styles = StyleSheet.create({})