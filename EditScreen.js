import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import Theme from '../theme'
const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');

    const { state,editBlogPost } = useContext(Context);

    const blogPost = state.find(
           blogPost=> blogPost.id === id
        );
    // Here we find the state and compared our id to navigation id and assign to variable blogPost

   return <BlogPostForm
           initialValues={{title: blogPost.title, content: blogPost.content}}
           onSubmit={(title,content) => {
         
             editBlogPost(id,title,content, () => navigation.pop()); // callback func navigation.pop()

           }} />

};

const Styles = StyleSheet.create({

});

export default EditScreen;
