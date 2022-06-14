import React from 'react'
import { StyleSheet, View } from 'react-native'
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
  VStack
} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { formatUSD } from '../utils/functions'

import PedidoContext from '../context/pedidos/pedidoContext'
import globalStyles from '../styles/global'

const FormularioPlatillo = () => {


  return (
    <Card>
      <Center>
        <Text style={[globalStyles.titulo, { paddingVertical: 15 }]}>Cantidad</Text>
        <SimpleGrid columns={{
          base: 4,
          md: 9
        }} space={8}>
          {/* <Icon name="remove" />
          <Icon name="remove" />
          <Icon name="remove" />
          <Icon name="remove" /> */}
          <Text>s</Text>
          <Text>s</Text>
          <Text>s</Text>

        </SimpleGrid>


      </Center>
    </Card > 
  )
}

export default FormularioPlatillo

const styles = StyleSheet.create({})