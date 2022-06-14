import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Separator,
  Divider,
  Content,
  Pressable,
  Image,
  Text,
  Card,
  Body,
  Avatar,
  FlatList,
  HStack,
  VStack,
  Stack,
  Badge,
  Box,
  Spacer,
  Flex,
  Center
} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidoContext';

import { capitalizarPrimeraLetra } from '../utils/functions';

const Menu = () => {

  // Context de Firebase 
  const { menu, obtenerProductos } = useContext(FirebaseContext);

  // Context de pedido
  const { seleccionarPlatillo } = useContext(PedidoContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria, i) => {
    // return <Text style={styles.separadorTexto}> {categoria} {i} </Text>
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          // <Separator style={styles.separador}>
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}> {capitalizarPrimeraLetra(categoria?.toLowerCase())} </Text>
          </View>

          // </Separator>
        )
      }
    } else {
      return (
        // <Separator style={styles.separador}>
        <View style={styles.separador}>
          <Text style={styles.separadorTexto}> {capitalizarPrimeraLetra(categoria?.toLowerCase())} </Text>
        </View>

        // </Separator>
      )
    }
  }

  return (
    <Fragment style={globalStyles.contenedor}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFF'
        }}
      >
        {/* <FlatList data={menu} renderItem={({
          item, index
        }) => {
          return (
            <>
              {mostrarHeading((item?.categoria), index)}
              <Pressable onPress={() => {
                console.log(item.nombre);
              }}
              >
                <Box
                  borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                  <Card>
                    <HStack space={3} justifyContent="space-between">
                      <Image resizeMode="contain" size="md" style={{}} source={{
                        uri: item?.imagen
                      }} />

                      <VStack>
                        <Text _dark={{
                          color: "warmGray.50"
                        }}
                          color="coolGray.800"
                          bold
                        >
                          {item.nombre}
                        </Text>
                        <Text
                          note
                          numberOfLines={2}
                          color="coolGray.400"
                          _dark={{
                            color: "warmGray.100"
                          }}
                        >
                          {item.descripcion}
                        </Text>

                        <Text
                          fontSize="xs"
                          _dark={{
                            color: "warmGray.50"
                          }}
                          color="coolGray.800"
                          alignSelf="flex-start"
                          fontWeight="bold"
                        >
                          Precio: S/. {item.precio}
                        </Text>
                      </VStack>
                      <Spacer />
                    </HStack>
                  </Card>
                </Box>
              </Pressable>
            </>
          )
        }}
          keyExtractor={item => item.id}
        /> */}

        <FlatList data={menu} renderItem={({
          item, index
        }) => {
          return (
            <>
              {mostrarHeading((item?.categoria), index)}
              <Pressable onPress={() => {
                console.log(item.nombre);
              }}
              >
                {({
                  isHovered,
                  isFocused,
                  isPressed
                }) => {
                  return (
                    <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "#FFF"} style={{
                      transform: [{
                        scale: isPressed ? 0.96 : 1
                      }]
                    }}
                      p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
                      <Box
                        borderBottomWidth="1" _dark={{
                          borderColor: "gray.600"
                        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <Stack>
                          <HStack space={3} justifyContent="space-between">

                            {/* <Center size={16} bg="primary.400" rounded="md" _text={{
                              color: "white"
                            }} shadow={3}> */}
                            {/* <Image
                                // resizeMode="contain" size="md"
                                source={{
                                  uri: item?.imagen
                                }}
                              /> */}

                            <Image resizeMode="contain" source={{
                              uri: item?.imagen
                            }} alt="Alternate Text" size="md" />

                            {/* </Center> */}

                            <VStack>
                              <Text _dark={{
                                color: "warmGray.50"
                              }}
                                color="coolGray.800"
                                bold
                              >
                                {item.nombre}
                              </Text>
                              <Text
                                note
                                numberOfLines={2}
                                color="coolGray.400"
                                _dark={{
                                  color: "warmGray.100"
                                }}
                              >
                                {item.descripcion}
                              </Text>
                            </VStack>
                          </HStack>
                        </Stack>

                      </Box>
                    </Box>
                  )
                }}
              </Pressable>
            </>
          )
        }}
          keyExtractor={item => item.id}
        />




      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#000',
  },
  separadorTexto: {
    padding: 8,
    // color: '#585858',
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    // backgroundColor: '#C0C0C0',
    color: '#FFDA00',
  }
})

export default Menu;
