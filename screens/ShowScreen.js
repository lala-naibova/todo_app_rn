import React,{useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

import {Context} from '../context/BlogContext'

const ShowScreen = (props) => {
    const {state} = useContext(Context);
    const currId = props.navigation.getParam('currId')
    const currBlog = state.find(item=>item.id === currId);
    
    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <View style={styles.title}>
                <Text>{currBlog.title}</Text>
            </View>
            <Text style={styles.label}>Content:</Text>
            <View style={styles.content}>
                <Text>{currBlog.content}</Text>
            </View>
            
        </View>
    );
}
ShowScreen.navigationOptions = navData =>{
    return{
        headerRight:()=>{
            return <TouchableOpacity style={{marginRight:5}}
            onPress={()=>{navData.navigation.navigate('Edit',{id: navData.navigation.getParam('currId')})}}>
                <FontAwesome name='pencil' size={23}/>
            </TouchableOpacity>
        }
    }
}

const styles= StyleSheet.create({
    label:{
    fontSize:18,
    fontWeight:'bold',
    padding:5
    },
    title:{
        borderColor:'blue',
        borderWidth:1,
        height:40,
        width:300,
        marginLeft:20,
        justifyContent:'center',
        paddingLeft:10
    },
    content:{
        borderColor:'blue',
        borderWidth:1,
        height:200,
        width:300,
        marginLeft:20,
        padding:10
    }
})
export default ShowScreen;
