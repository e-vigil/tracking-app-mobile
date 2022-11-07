import { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableHighlight,
    Alert,
    StyleSheet
} from 'react-native'

const Inicio = ({ navigation }) => {

    const [code, setCode] = useState('')

    const handleChangeText = (e) => {
        setCode(e)
    }

    const handleClick = (e) => {

        if (code === '') {
            Alert.alert('Error', 'Codigo necesario')
            return
        }

        navigation.navigate('Detalles')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Seguimiento</Text>

            <SafeAreaView style={styles.input_container}>
                <TextInput
                    style={styles.input}
                    placeholder='Codigo'
                    placeholderTextColor='#7A869A'
                    onChangeText={handleChangeText}
                />
            </SafeAreaView>

            <TouchableHighlight
                onPress={handleClick}
            >
                <View style={styles.boton}>
                    <Text style={styles.boton_texto}>Enviar</Text>
                </View>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    titulo: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 40,
        textAlign: 'center',
    },
    input_container: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#1b1b32',
        borderStyle: 'solid',
        borderWidth: 2,
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
        padding: 16,
    },
    boton: {
        backgroundColor: '#1b1b32',
        borderColor: '#1b1b32',
        borderStyle: 'solid',
        borderWidth: 2,
        padding: 16,
    },
    boton_texto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
})

export default Inicio
