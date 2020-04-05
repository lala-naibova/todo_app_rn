import React,{useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.initialValue.title);
    const [content, setContent] = useState(props.initialValue.content);
    return (
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input}
            value={title} onChangeText={(txt)=>{setTitle(txt)}}/>
            <Text style={styles.label}>Content</Text>
            <TextInput multiline style={styles.contextInput} 
            value={content} onChangeText={(txt)=>{setContent(txt)}}/>
            <Button 
            title='Save blog post' 
            onPress={()=>{props.onSubmit(title,content)}}/>
        </View>
    );
}
BlogPostForm.defaultProps={
    initialValue:{
        title:'',
        content:''
    }
}

const styles= StyleSheet.create({
    input:{
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        margin:5,
        padding :5
    },
    label:{
        fontSize:20,
        marginBottom:10
    },
    contextInput:{
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        margin:5,
        padding :5,
        height:200,
    },
})
export default BlogPostForm;
