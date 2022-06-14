import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Box,
  Heading,
  Card,
  CardItem,
  Center
} from 'native-base'
import { formatUSD } from '../utils/functions'

import PedidoContext from '../context/pedidos/pedidoContext'
import globalStyles from '../styles/global'

const DetallePlatillo = () => {

  //pedido context
  const { platillo } = useContext(PedidoContext);
  const { nombre, imagen, descripcion, precio } = platillo;

  return (
    <Card style={[globalStyles.contenedor, { backgroundColor: '#FFF' }]}>
      <Box style={globalStyles.contenido}>
        <Heading style={globalStyles.titulo}>{nombre}</Heading>

        <Card>
          <Box
            borderWidth="2"
            background={"#FFF"}
            borderColor="coolGray.200"
            _dark={{
              borderColor: "gray.600"
            }}
            pl="4"
            pr="5"
            py="4"
          >
            <Image style={globalStyles.image} resizeMode="contain" source={{
              uri: imagen
            }} alt="Alternate Text" size="md" />

            <Text style={{ marginTop: 20 }}>{descripcion}</Text>
            <Text style={globalStyles.cantidad}>Precio: S/. {formatUSD(precio)}</Text>

          </Box>
        </Card>
      </Box>
    </Card>
  )
}

export default DetallePlatillo

const styles = StyleSheet.create({})