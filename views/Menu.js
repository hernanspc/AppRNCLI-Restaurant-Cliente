import React, { useContext, useEffect, Fragment } from 'react';
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Separator,
  Content,
  Image,
  Text,
  Card,
  Body,
  Avatar,
  FlatList,
  HStack,
  VStack,
  Box,
  Spacer
} from 'native-base';
import globalStyles from '../styles/global';

import  FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidoContext';


const Menu = () => {

    // Context de Firebase 
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    // Context de pedido
    const { seleccionarPlatillo } = useContext(PedidoContext);

    // Hook para redireccionar
    const navigation = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);

    const mostrarHeading = (categoria, i) => {

        if(i > 0 ) {
            const categoriaAnterior = menu[i - 1].categoria;
            if(categoriaAnterior !== categoria) {
                return (
                    // <Separator style={styles.separador}>
                        <Text style={styles.separadorTexto}> {categoria} </Text>
                    // </Separator>
                )
            }
        } else {
            return (
                // <Separator style={styles.separador}>
                    <Text style={styles.separadorTexto}> {categoria} </Text>
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
          <FlatList data={menu} renderItem={({
            item
          }) => <Box
            borderBottomWidth="1" _dark={{
              borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">

              {mostrarHeading(item.categoria, item.id)}
          
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
                      color="coolGray.500" _dark={{
                        color: "warmGray.100"
                    }}>
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
          </Box>} keyExtractor={item => item.id} />

          </View>


        </Fragment>
     );
}

const styles = StyleSheet.create({
    separador: {
        backgroundColor: '#000',
    },
    separadorTexto: {
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
 
export default Menu;