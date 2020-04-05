import React,{useContext} from 'react';
import {Context} from '../context/BlogContext'

import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = (props) => {
    const {addBlogPosts} = useContext(Context);
    
    const onSavehandler = (title,content)=>{
        addBlogPosts(title,content, ()=>{
            props.navigation.navigate('Index')
        });      
    }
    return (
        <BlogPostForm 
        onSubmit={onSavehandler}/>
    );
}

export default CreateScreen;
