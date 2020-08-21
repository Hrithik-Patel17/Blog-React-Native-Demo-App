import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map(() => {
           
        return blogPost.id === action.payload.id ? action.payload : blogPost; 

      });
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload ); //here payload is id that we given inside deleteBlogPost
    // case 'add_blogpost':
    //   return [...state,
    //      {
    //       id: Math.floor(Math.random()* 99999),
    //       title: action.payload.title,
    //       content: action.payload.content
    //      }
    //   ];
    default:
      return state;
  }
};

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    //response.data === [{},{},{}]  list of objects
    // now call the dispatch

    dispatch({type: 'get_blogposts', payload: response.data});
  };

};

const addBlogPost = dispatch => {
  return async (title,content,callback) => {
    await jsonServer.post('/blogposts',{title,content});
    // dispatch({ type: 'add_blogpost', payload: {title, content}});
    if (callback){
     callback();

    }
  };
};

const deleteBlogPost = dispatch => {
  return  async id => {
    await jsonServer.delete(`/blogposts/${id}`);  // delete method use for delete and pass the id

    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch =>{
 return  async (id,title,content,callback) => {

  await jsonServer.put(`/blogposts/${id}`,{title,content}); // put method use for edit the exsiting post

  dispatch({type: 'edit_blogpost',
   payload: {id,title,content}});

   if (callback){
    callback();

   }
 };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  [] // default screen title 
);


// All we have createDataContext that we assigned in it

// we just passed the Three agrument state,action,initialState 

// export const {Context, Provider } = createDataContext (blogReducer, {addBlogPost}, []); Here we passed the 3 arguments


// We passed {addBlogPost} as object in argument  