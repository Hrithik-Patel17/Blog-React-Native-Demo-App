import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import Theme from '../theme'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {

    // first time we vist the screen do one fatch
    getBlogPost();

    // Anytime to return the screen do fatch again

    const listener = navigation.addListener('didFocus', () => {

      getBlogPost();

    });

    return () => {

      listener.remove();

    };

  }, []);


  return (
    <View>

      <FlatList
        style={{ backgroundColor: Theme.primary() }}
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderTopWidth: 1,
                borderColor: 'gray'
              }}>
                <Text style={{ fontSize: 18, color: Theme.accent() }}> {item.title} - {item.id} </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={{ fontSize: 24,color:Theme.accent}}  name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
      }}>
        <Feather name="plus" size={30} />
        <Feather name="align-justify"style={{ fontSize: 24,color:Theme.accent}}  />
      </TouchableOpacity>
    ),
  }
};

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     borderTopWidth: 1,
//     borderColor: 'gray'
//   },
//   title: {
//     fontSize: 18
//   },
//   icon: {
//     fontSize: 24
//   }
// });

export default IndexScreen;
