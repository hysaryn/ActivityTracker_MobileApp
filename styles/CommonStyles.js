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

    fontGrey: 'dimgrey',
    fontPurple: "rgb(60,61,132)",

    container: {
        flex:1,
        backgroundColor:"rgb(127,123,189)",
        alignItems:'center',
        justifyContent:'center',
    },

    addContainer: {
        flex: '100%',
        flexDirection:'row',
        backgroundColor:"rgb(127,123,189)",
        justifyItem:'start',
        justifyContent:'center',
    },

    contentContainer: {
        width: '90%'
    },

    buttonsContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-evenly',
    },

    inputBox: {
        width:'100%',
        height: 40,
        backgroundColor:"rgb(154,150,221)",
        borderColor:"rgb(60,61,132)",
        borderWidth:1,
        borderRadius:4,
        marginBottom:'2%',
    },

    inputHeader:{
        fontSize:18,
        alignSelf:'flex-start',
        color:"rgb(60,61,132)",
        fontWeight:'bold',
        marginBottom:'2%'
    },

    regularFont:{
        fontSize:18,
        alignSelf:'flex-start',
        color:"rgb(60,61,132)",
    },

    boxFont:{
        fontSize:13,
        alignSelf:'flex-start',
        color:"white",
        fontWeight:'bold',
    },

    boxFont2:{
        fontSize:13,
        color:"rgb(60,61,132)",
        backgroundColor:'white',
        fontWeight:'bold',
    },

    card: {
        backgroundColor: "rgb(60,61,132)",
        width:300,
        height: 40,
        borderRadius:5,
        justifyContent: 'center',
        shadowRadius:3,
        shadowOpacity: 0.2,
        marginTop:'10%',
    },

    directionRow: {
        flexDirection: "row",
      },

})

export default CommonStyles;