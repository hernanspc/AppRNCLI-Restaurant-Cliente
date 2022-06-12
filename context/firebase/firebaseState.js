import React,{ useReducer} from 'react'

// import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

const FirebaseState =(props)=>{

    // console.log('firebase ',firebase)
    console.log('brillo brush')
    //crear state inicial
    const initalState = {
        menu:[]
    }

    //use reducer con dispatch para ejecutar funciones
    const [state, dispatch] = useReducer(FirebaseReducer,initalState)

    return(
        <FirebaseContext.Provider
            value={{
                menu:state.menu
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


export default FirebaseState