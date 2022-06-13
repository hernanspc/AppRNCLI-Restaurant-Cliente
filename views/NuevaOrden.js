import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button , Text,VStack} from 'native-base';
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.contenedor}> 
      <View style={[globalStyles.contenido, styles.contenido]}>
        <Button 
          style={globalStyles.boton}
          rounded={15}
          // block
          onPress={
            ()=>{navigation.navigate('Menu')}}
          >
            <Text style={globalStyles.botonTexto}>Crear nueva orden</Text>
        </Button>
      </View>
    </View>
  )
}

export default NuevaOrden

const styles = StyleSheet.create({
  contenido:{
    flexDirection: 'column',
    justifyContent: 'center',
  }
})