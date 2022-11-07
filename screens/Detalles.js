import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'

const Detalles = ({ navigation }) => {

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.titulo}>Pedido</Text>
                    <Text style={styles.subtitulo}>#92834</Text>

                    {/* detalles del pedido */}
                    <View style={styles.margin}>

                        <View style={styles.section}>
                            <Text style={styles.attribute_text}>Cliente</Text>
                            <Text style={styles.value_text}>Elena Wilson</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.attribute_text}>Direccion</Text>
                            <Text style={styles.value_text}>Col. San Jose, San Miguel</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.attribute_text}>Productos</Text>
                            <Text style={styles.value_text}>Hamburgesa de pollo</Text>
                            <Text style={styles.value_text}>Soda pepsi</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.attribute_text}>Estado</Text>
                            <Text style={styles.value_text}>En proceso</Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    titulo: {
        color: '#172B4D',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'left'
    },
    subtitulo: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
        marginBottom: 20,
    },
    attribute_text: {
        color: '#7A869A',
        fontSize: 18,
        fontWeight: '500',
    },
    value_text: {
        color: '#172B4D',
        fontSize: 18,
        fontWeight: '500',
    },
    section: {
        marginBottom: 20,
    },
    item: {
        marginTop: 10,
        marginBottom: 20,
    },
    marginBottom: {
        marginBottom: 20,
    }
})

export default Detalles
