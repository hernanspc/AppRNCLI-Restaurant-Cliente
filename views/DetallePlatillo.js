import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Pressable,
  Button,
  Body,
  Text,
  H1,
  Box,
  Heading,
  Card,
  CardItem,
  Center,
  HStack
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { formatUSD } from '../utils/functions'

import PedidoContext from '../context/pedidos/pedidoContext'
import globalStyles from '../styles/global'

const DetallePlatillo = () => {

  //pedido context
  const { platillo } = useContext(PedidoContext);
  const { nombre, imagen, descripcion, precio } = platillo;

  // Hook para redireccionar
  const navigation = useNavigation();

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

      <HStack
        space={10}
      >
        <Box
          style={{ width: '100%', height: '100%' }}
        >
          <Button style={{ marginBottom: 10, backgroundColor: "#fd2" }}
            onPress={() => {
              // console.log('ir a FormularioPlatillo');
              navigation.navigate('FormularioPlatillo');
            }}
          >
            <Text style={globalStyles.botonTexto}>Ordenar platillo</Text>
          </Button>
        </Box>
      </HStack>

    </Card>
  )
}

export default DetallePlatillo

const styles = StyleSheet.create({})