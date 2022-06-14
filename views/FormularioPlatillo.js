import React, { useState, useContext } from 'react'
import { StyleSheet, View, } from 'react-native'
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

  //state para cantidades
  const [cantidad, guardarCantidad] = useState(1)

  //Almaccena cantidad via input
  const calcularCantidad = cantidad => {

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

  //Decrementar uno
  const decrementarUno = () => {
    if (cantidad > 1) {
      const newCantidad = parseFloat(cantidad) - 1;
      guardarCantidad(newCantidad)
    }
  }


  //incrementar Uno
  const incrementarUno = () => {
    console.log('cantidad ', cantidad)
    const newCantidad = parseFloat(cantidad) + 1;
    guardarCantidad(newCantidad)
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
          // _text={{
          //   textAlign: "justifyContent"
          // }}
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
            // backgroundColor: "#F92"
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
          // _text={{
          //   textAlign: "justifyContent"
          // }}
          style={{ backgroundColor: "#000", height: 80, width: 90, justifyContent: "center" }}
        >
          <AddIcon />
        </Button>
      </View>
    </>
  )

  return (
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
      </Center>
    </Card > 
  )
}

export default FormularioPlatillo

const styles = StyleSheet.create({})