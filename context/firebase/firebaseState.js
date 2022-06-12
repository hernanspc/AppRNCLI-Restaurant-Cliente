import React,{ useReducer} from 'react'

import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

const FirebaseState =(props)=>{

    //crear state inicial
    const initalState = {
        menu:[]
    }

    //use reducer con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(FirebaseReducer,initalState)

    return(
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export default FirebaseState