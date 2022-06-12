import React,{ useReducer} from 'react'

import PedidoReducer from './pedidoReducer'
import PedidoContext from './pedidoContext'

const PedidosState =(props)=>{

    // console.log('firebase',firebase)  //funciona OK

    //crear state inicial
    const initalState = {
        pedido:  []
    }

    //use reducer con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(PedidoReducer,initalState)

    return(
        <PedidoContext.Provider
            value={{
                pedido: state.pedido
            }}>
            {props.children}
        </PedidoContext.Provider>
    )
}


export default PedidosState