import React from 'react';

import { 
    View, 
    StyleSheet, 
    Text, 
    StatusBar,
    TouchableOpacity
} from 'react-native';

import {Feather} from '@expo/vector-icons'

const statusBarHeignt = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
    <View style={style.container}>
        <View style={style.content}>
        <Text> Header do app </Text>

        <TouchableOpacity activeOpacity={0.5} style={style.buttonUser}>
            <Feather name="user" size={27} color="fff"/>
        </TouchableOpacity>
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff',
        paddingTop: statusBarHeignt,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom: 44,
    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
    }
})