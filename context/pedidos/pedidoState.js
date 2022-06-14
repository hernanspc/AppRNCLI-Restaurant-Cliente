import React,{ useReducer} from 'react'

import PedidoReducer from './pedidoReducer'
import PedidoContext from './pedidoContext'

import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO
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

    // Cuando el usuario confirma un platillo
    const guardarPedido = pedido => {
        dispatch({
            type: CONFIRMAR_ORDENAR_PLATILLO,
            payload: pedido
        })
    }

    return(
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo,
                guardarPedido
            }}>
            {props.children}
        </PedidoContext.Provider>
    )
}


export default PedidoState