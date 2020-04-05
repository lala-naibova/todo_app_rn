import React,{useContext} from 'react';

import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = (props) => {
    const currId = props.navigation.getParam('id');
    const {state, editBlogPost} = useContext(Context);
    currBlog = state.find(elem=>elem.id === currId);
    return (
        <BlogPostForm
        initialValue={{title: currBlog.title, content:currBlog.content}}
        onSubmit={(title, content)=>{
            editBlogPost(currId, title, content, ()=>{props.navigation.navigate('Index')})}}/>
    );
}

export default EditScreen;
