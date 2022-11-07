import {
    View,
    StyleSheet,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from './screens/Inicio'
import Detalles from './screens/Detalles'

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <View style={styles.wrapper}>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Inicio' component={Inicio} />
                    <Stack.Screen name='Detalles' component={Detalles} />
                </Stack.Navigator>
            </NavigationContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 40,
    }
})

export default App
