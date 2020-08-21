import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { Context } from '../context/BlogContext';
import Theme from '../theme'
const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (

        <View>
            
            <Text style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 5,
                color: Theme.accent()
            }}>Enter Title:</Text>
            <TextInput style={{
                fontSize: 10,
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 15,
                margin: 5,
                padding: 5,
                color: Theme.accent()
            }} value={title} onChangeText={(text) => setTitle(text)} />

            <Text style={{
                fontSize: 20,
                marginBottom: 5,
                marginLeft: 5,
                color: Theme.accent()
            }}>Enter Content:</Text>
            <TextInput style={{
                fontSize: 10,
                borderWidth: 1,
                borderColor: 'black',
                marginBottom: 15,
                margin: 5,
                padding: 5,
                color: Theme.accent()
            }} value={content} onChangeText={(text) => setContent(text)} />

            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)} />
        </View>

    )

};

BlogPostForm.defaultProps = {

    initialValues: {
        title: '',
        content: ''
    }
};

// const Styles = StyleSheet.create({
//     input: {

//         fontSize: 10,
//         borderWidth: 1,
//         borderColor: 'black',
//         marginBottom: 15,
//         margin: 5,
//         padding: 5

//     },

//     label: {

//         fontSize: 20,
//         marginBottom: 5,
//         marginLeft: 5
//     }
// });

export default BlogPostForm;
