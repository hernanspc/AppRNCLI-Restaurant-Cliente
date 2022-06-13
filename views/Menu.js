import React, { useContext, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FirebaseContext from '../context/firebase/firebaseContext'

const Menu = () => {

  // Context de Firebase
  const {obtenerProductos} = useContext(FirebaseContext)

  useEffect(() => {
       obtenerProductos();
  }, []);

  return (
    <View>
      <Text>Menu</Text>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({})