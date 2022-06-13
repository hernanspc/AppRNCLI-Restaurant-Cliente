import React,{ useReducer,useEffect} from 'react'

import firebase from '../../firebase';

import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

import {OBTENER_PRODUCTOS_EXITO} from "./../../types"
import _ from 'lodash'

const FirebaseState =(props)=>{

    //crear state inicial
    const initalState = {
        menu:[]
    }

    //use reducer con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(FirebaseReducer,initalState)

    //funcion para traer productos
    const obtenerProductos = () => {
  

        // consultar firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');

            // Tenemos resultados de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    }


    return(
        <FirebaseContext.Provider
            value={{
                menu:state.menu,
                firebase,
                obtenerProductos
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export default FirebaseState