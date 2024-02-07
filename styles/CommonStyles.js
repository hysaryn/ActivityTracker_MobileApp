import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommonStyles = StyleSheet.create({
    purpleDark: {
        backgroundColor: "rgb(60,61,132)",
    },

    purpleMedium: {
        backgroundColor: "rgb(127,123,189)",
    },

    purpleLight: {
        backgroundColor: "rgb(154,150,221)",
    },

    regularFont:{
        fontSize:18,
        alignSelf:'flex-start',
        color:"rgb(60,61,132)",
    },

    fontGrey: {
        color: 'dimgrey',
    },

    fontPurple: {
        color: "rgb(60,61,132)",
    },

    container: {
        flex:1,
        backgroundColor:"rgb(127,123,189)",
        alignItems:'center',
        justifyContent:'center',
    },

    buttonsContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
    },

    inputBox: {
        width:'100%',
        height: 30,
        backgroundColor:"rgb(154,150,221)",
        borderWidth:1,
        borderRadius:4,
        marginTop:'2%',
    }

})

export default CommonStyles;