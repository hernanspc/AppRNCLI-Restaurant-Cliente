import React,{ useReducer} from 'react'

import PedidoReducer from './pedidoReducer'
import PedidoContext from './pedidoContext'

import {
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO,
    MOSTRAR_RESUMEN,
    ELIMINAR_PRODUCTO
} from '../../types'

const PedidoState =(props)=>{

    // console.log('firebase',firebase)  //funciona OK

    //crear state inicial
    const initalState = {
        pedido: [],
        platillo: null,
        total: 0,
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

    // Muestra el total a pagar en el resumen
    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    //Elimina un articulo del carrito
    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    return(
        <PedidoContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                seleccionarPlatillo,
                guardarPedido,
                mostrarResumen,
                eliminarProducto
            }}>
            {props.children}
        </PedidoContext.Provider>
    )
}


export default PedidoState