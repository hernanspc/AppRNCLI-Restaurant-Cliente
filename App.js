import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden'
import DetallePlatillo from './views/DetallePlatillo'
import FormularioPlatillo from './views/FormularioPlatillo'
import ProgresoPedido from './views/ProgresoPedido'
import ResumenPedido from './views/ResumenPedido'
import Menu from './views/Menu'

//compoents
import BotonResumen from './components/ui/BotonResumen'

import FirebaseState from './context/firebase/firebaseState'
import PedidoState from './context/pedidos/pedidoState'

import { NativeBaseProvider,  } from 'native-base';

import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <NativeBaseProvider>
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
                    },
                    headerTintColor: '#000'
                  }}
                >
                  <Stack.Screen 
                  name="NuevaOrden"
                    component={NuevaOrden}
                    options={{
                      title:"Nueva Orden"
                    }}
                  />

                  <Stack.Screen 
                    name="Menu"
                    component={Menu}
                    options={{
                      title: "Nuestro Menú",
                      headerRight: props => <BotonResumen />
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
      </NativeBaseProvider>
    </>
    
  )
}

export default App

const styles = StyleSheet.create({})