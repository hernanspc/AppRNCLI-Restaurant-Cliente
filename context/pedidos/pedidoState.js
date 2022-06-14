import React,{ useReducer} from 'react'

import PedidoReducer from './pedidoReducer'
import PedidoContext from './pedidoContext'

import {
    SELECCIONAR_PRODUCTO
} from '../../types'

const PedidoState =(props)=>{

    // console.log('firebase',firebase)  //funciona OK

    //crear state inicial
    const initalState = {
        pedido: [],
        platillo: null,
    }

    //use reducer con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(PedidoReducer,initalState)

    //Seleciona el producto que el usuario desea ordenar

    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })

    }

    return(
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo
            }}>
            {props.children}
        </PedidoContext.Provider>
    )
}


export default PedidoState