import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden'
import DetallePlatillo from './views/DetallePlatillo'
import FormularioPlatillo from './views/FormularioPlatillo'
import ProgresoPedido from './views/ProgresoPedido'
import ResumenPedido from './views/ResumenPedido'
import Menu from './views/Menu'

import FirebaseState from './context/firebase/firebaseState'
import PedidoState from './context/pedidos/pedidoState'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{
                  backgroundColor: "#FFDA00"
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                }
              }}
            >
              <Stack.Screen 
                name="Nueva Orden"
                component={NuevaOrden}
                options={{
                  title:"Nueva Orden"
                }}
              />

              <Stack.Screen 
                name="Menu"
                component={Menu}
                options={{
                  title:"Nuestro MenÚ"
                }}
              />

              <Stack.Screen 
                name="DetallePlatillo"
                component={DetallePlatillo}
                options={{
                  title:"Detalle Platillo"
                }}
              />

              <Stack.Screen 
                name="FormularioPlatillo"
                component={FormularioPlatillo}
                options={{
                  title:"Formulario Platillo"
                }}
              />

              <Stack.Screen 
                name="ResumenPedido"
                component={ResumenPedido}
                options={{
                  title:"Resumen Pedido"
                }}
              />

              <Stack.Screen 
                name="ProgresoPedido"
                component={ProgresoPedido}
                options={{
                  title:"Progreso Pedido"
                }}
              />
              

            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({})