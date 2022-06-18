import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Heading, Platform } from 'react-native'
import { Button, Card, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import PedidoContext from '../context/pedidos/pedidoContext'
import firebase from '../firebase'
import Countdown from 'react-countdown'

const ProgresoPedido = () => {

  const navigation = useNavigation();
  const { idpedido } = useContext(PedidoContext);

  const [tiempo, guardarTiempo] = useState(0)
  const [completado, guardarCompletado] = useState(false)

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db.collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function (doc) {
          guardarTiempo(doc.data().tiempoentrega);
          guardarCompletado(doc.data().completado);
        })
    }
    obtenerProducto();
  }, []);

  // muestra en countdown en pantalla
  const renderer = ({ minutes, seconds }) => {
    console.log(minutes)

    return (
      <Text style={styles.tiempo}>{minutes}:{seconds}</Text>
    )
  }

  return (
    <Card style={[globalStyles.contenedor, { backgroundColor: '#FFF' }]}>
      <View style={[globalStyles.contenido, { marginTop: 50 }]}>

        {
          tiempo === 0 ? (
            <>
              <Text style={{ textAlign: "center" }}>Espera un momento, hemos recibido tu orden...</Text>
              <Text style={{ textAlign: "center" }}>Estamos calculando el tiempo de entrega...</Text>
            </>
          ) : null
        }

        {!completado && tiempo > 0 ? (
          <>
            <Text style={[{ textAlign: "center" }, Platform.OS === "ios" ? '' : { paddingTop: 20 }]}>Su orden estará lista en: </Text>
            <Text style={[{ textAlign: "center" }, Platform.OS === "ios" ? '' : { paddingTop: 20 }]}>
              <Countdown
                date={Date.now() + tiempo * 60000}
                renderer={renderer}
              />
            </Text>
          </>
        ) : null}

        {completado ?
          <>
            <Text style={[styles.textoCompletado, { textAlign: "center", fontWeight: "bold", fontSize: 25 }]}>Orden Lista</Text>
            <Text style={[styles.textoCompletado, { textAlign: "center", fontSize: 15 }]}>Por favor pase a recojer su pedido</Text>

            <Button
              size="sm"
              variant={"solid"}
              backgroundColor={"#facc15"}
              _text={{
                color: "#000",
                fontWeight: 'bold',
              }}
              onPress={() => {
                navigation.navigate('NuevaOrden')
              }}
              px="3"
            >
              Nueva Orden
            </Button>
          </> :
          <></>
        }
      </View>
    </Card>
  )
}

export default ProgresoPedido

const styles = StyleSheet.create({
  tiempo: {
    marginBottom: 20,
    fontSize: 35,
    textAlign: "center",
    marginTop: 30,
  },
  textoCompletado: {
    textAlign: "center",
    textTransform: 'uppercase',
    marginBottom: 20,
  }

})