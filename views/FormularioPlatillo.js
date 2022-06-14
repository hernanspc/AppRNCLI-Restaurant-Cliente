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

const FormularioPlatillo = () => {

  // State para cantidades
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  // Context
  const { platillo, guardarPedido } = useContext(PedidoContext);
  const { precio } = platillo;

  // En cuanto el componente carga calcular la cantidad a pagar
  useEffect(() => {
    calcularTotal();
  }, [cantidad])


  // Calcula total de platillo
  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    guardarTotal(totalPagar)
  }

  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8
  });

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },

  ];

  // Decrementar uno
  const decrementarUno = () => {
    if (cantidad > 1) {
      const newCantidad = parseFloat(cantidad) - 1;
      guardarCantidad(newCantidad)
    }
  }

  // Incrementar Uno
  const incrementarUno = () => {
    console.log('cantidad ', cantidad)
    const newCantidad = parseFloat(cantidad) + 1;
    guardarCantidad(newCantidad)
  }

  // Agregar pedido
  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas confirmar tu pedido?',
      'Un pedido confirmado ya no se podrá modificar',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            // Almacenar el pedido al pedido principal
            const pedido = {
              ...pedido,
              cantidad,
              total
            }

            console.log('form ', pedido);
            guardarPedido(pedido);

            // Navegar hacia el Resumen
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel'
        }
      ]
    )
  }

  const renderItem = ({ item }) =>
  (
    <>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }}>
        <Button
          onPress={() => decrementarUno()}
          _dark={{
            backgroundColor: "gray.900"
          }}
          _text={{
            textAlign: "justifyContent"
          }}
          style={{ backgroundColor: "#000", height: 80, width: 90, justifyContent: "center" }}
        >
          <MinusIcon />

        </Button>

        <Input
          variant="unstyled"
          placeholder=""
          value={cantidad.toString()} _light={{
            placeholderTextColor: "blueGray.400"
          }} _dark={{
            placeholderTextColor: "blueGray.50"
          }}
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}
          width={20}
          keyboardType="numeric"
          onChangeText={(cantidad) => guardarCantidad(cantidad)}
        />
        <Button
          onPress={() => incrementarUno()}
          _dark={{
            backgroundColor: "gray.900"
          }}
          _text={{
            textAlign: "justifyContent"
          }}
          style={{ backgroundColor: "#000", height: 80, width: 90, justifyContent: "center" }}
        >
          <AddIcon />
        </Button>
      </View>
    </>
  )

  return (
    <>
      <Card>
        <Center>
          <Text style={[globalStyles.titulo, { paddingVertical: 15 }]}>Cantidad</Text>
          <Box w="100%">
            <FlatList data={DATA}
              renderItem={renderItem}
              keyExtractor={DATA => DATA.id}
              numColumns={cols}
            />
          </Box>
          <Text style={globalStyles.cantidad}>Total: S/. {total}</Text>
        </Center>

      </Card>

      <View style={{ position: 'absolute', bottom: 20, }}>
        <HStack
          space={10}
        >
          <Box
            style={{ width: '100%', height: '100%' }}
          >
            <Button style={globalStyles.boton}
              onPress={() => {
                console.log('Ordenar platillos');
                confirmarOrden()
              }}
            >
              <Text style={globalStyles.botonTexto}>Agregar al pedido</Text>
            </Button>
          </Box>
        </HStack>
      </View>
    </>

  )
}

export default FormularioPlatillo

const styles = StyleSheet.create({})