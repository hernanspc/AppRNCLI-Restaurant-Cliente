import { StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    contenedor:{
        flex: 1,
    },
    contenido:{
        marginHorizontal: '2.5%',
        flex:1, 
    },
    boton: {
        backgroundColor: '#FFDA00',
    },
    botonTexto:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    },
    titulo: {
        textAlign: 'center',
        // marginTop: 40,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
    },
    image: {
        height: 300,
        width: '100%'
    },
    cantidad: {
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }

})

export default globalStyles