import createDataContext from './createDataContext'

import jsonServer from '../api/jsonServer'

const blogReducer = (state, action)=>{
    switch (action.type) {
        case 'get_blogpost':
            return action.payload;
        case 'delete_blogpost':
            return state.filter(item=>item.id !== action.payload);
        case 'edit_blogpost':
                return state.map(blog=>{
                    return blog.id === action.payload.id? action.payload : blog;
                })
        default:
            return state;
    }
}
const getBlogPost = dispatch=>{
    return async()=>{
        const response = await jsonServer.get('/blogposts');
        dispatch({type:'get_blogpost', payload : response.data});
    }
}

const addBlogPosts = ()=>{
    return async (title,content, callBack)=>{
        await jsonServer.post('/blogposts',{title, content});
        callBack();
    }   
}
const deleteBlogPosts = dispatch=>{
    return async (id)=>{
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type:'delete_blogpost',payload: id})
    }
}

const editBlogPost = (dispatch)=>{
    return async (id,title,content,callBack)=>{
        await jsonServer.put(`/blogposts/${id}`,{title, content});
        dispatch({type:'edit_blogpost',payload: {id, title, content}});
        callBack();
    }
}

export const {Context, Provider} = createDataContext(blogReducer,
    {addBlogPosts, deleteBlogPosts, editBlogPost, getBlogPost},
    []);