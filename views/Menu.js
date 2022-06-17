import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet, View, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
  Pressable,
  Image,
  Text,
  Card,
  FlatList,
  HStack,
  VStack,
  Stack,
  Box,
  Spacer,
  Flex,
  Center
} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidoContext';

import { capitalizarPrimeraLetra, formatUSD } from '../utils/functions';

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
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <View style={styles.separador}>
            <Text style={styles.separadorTexto}> {capitalizarPrimeraLetra(categoria?.toLowerCase())} </Text>
          </View>
        )
      }
    } else {
      return (
        <View style={styles.separador}>
          <Text style={styles.separadorTexto}> {capitalizarPrimeraLetra(categoria?.toLowerCase())} </Text>
        </View>
      )
    }
  }

  return (
    <View style={globalStyles.contenedor}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#FFF'
        }}
      >
        {/* <Text style={styles.value}>{Platform.OS}</Text> */}
        <FlatList data={menu} renderItem={({
          item, index
        }) => {
          const { nombre, imagen, descripcion, categoria, precio } = item;

          return (
            <>
              {mostrarHeading((categoria), index)}
              <Box>
                <Pressable maxW="96" onPress={() => {

                  //elimar propiedades
                  const { existencia, ...platillo2 } = item;

                  seleccionarPlatillo(platillo2);
                  navigation.navigate('DetallePlatillo')
                }}>
                  {({
                    isHovered,
                    isFocused,
                    isPressed
                  }) => {
                    return <Box
                      bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "#FFF"}
                      style={{
                        transform: [{
                          scale: isPressed ? 0.96 : 1
                        }]
                      }}
                      // p="5" rounded="8" shadow={1}
                      borderWidth="0.5"
                      borderColor="coolGray.200"
                      pl="4" pr="5" py="2"
                    >
                      <Card>
                        <HStack space={3} justifyContent="space-between">
                          <Image resizeMode="contain" source={{
                            uri: imagen
                          }} alt="Alternate Text" size="md" />

                          <VStack>
                            <Text _dark={{
                              color: "warmGray.50"
                            }}
                              color="coolGray.800"
                              bold
                            >
                              {nombre}
                            </Text>
                            <Text
                              note
                              numberOfLines={2}
                              color="coolGray.400"
                              _dark={{
                                color: "warmGray.100"
                              }}
                            >
                              {descripcion}
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
                              Precio: S/. {formatUSD(precio)}
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Card>
                    </Box>
                  }}
                </Pressable>
              </Box>
            </>
          )
        }}
          keyExtractor={item => item.id}
        />




      </View>
    </View>
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
