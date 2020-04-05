import React,{useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {Context} from '../context/BlogContext'

const IndexScreen = (props) => {
    const {state,deleteBlogPosts,getBlogPost} = useContext(Context);

    useEffect(()=>{
        getBlogPost();
        const  listener = props.navigation.addListener('didFocus',()=>{
            getBlogPost();
        })

        return ()=>{
            listener.remove();
        }
    },[])
    const changeToShowScreen = (id)=>{
        props.navigation.navigate('Show', {currId : id})
    }
    return (
        <View style={styles.container}>
            <FlatList
            data={state}
            keyExtractor={state=>state.id.toString()}
            renderItem={(itemData)=>{
                return <TouchableOpacity onPress={()=>{changeToShowScreen(itemData.item.id)}}>
                        <View style={styles.blog}>
                            <Text style={{color:'#0a16a1'}}>{itemData.item.title}</Text>
                            <TouchableOpacity onPress={()=>{deleteBlogPosts(itemData.item.id)}}>
                                <Feather style={styles.icon} name='trash' size={23}/>
                            </TouchableOpacity>
                        </View>
                </TouchableOpacity>
                
            }}/>
        </View>
    );
}

IndexScreen.navigationOptions = navData =>{
    return{
        headerRight: ()=> {
        return <TouchableOpacity 
        style={{marginRight:5}}
        onPress={()=>{navData.navigation.navigate('Create')}}>
            <Feather name='plus' size={23}/>
        </TouchableOpacity>
         }
    }
}
const styles= StyleSheet.create({
    blog:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        margin:5,
        borderColor:'#f0eeee',
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#d4d97e'
    },
    container:{
        backgroundColor:'white',
        flex:1
    },
    icon:{
        color:'#bf1722'
    }
})
export default IndexScreen;
