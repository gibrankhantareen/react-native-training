import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native'

const App = () => {
    return(
        <>
        <View style={[styles.container,{ backgroundColor: "yellow"}]}>
             <Text>Gibran Khan Tareen</Text>
        </View>
        </>
    )
}

export default App;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
});