import React, { useContext } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';
import Theme from '../theme'
const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);  // pass the state as data here actual data is export from Contex means BlogContext so we pass Context
   
     const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
     // Here we find the state and compared our id to navigation id and assign to variable blogPost

    return (

        <View style={{backgroundColor: Theme.primary()}}>
            <Text style={{color: Theme.accent()}}>{blogPost.title}</Text> 
            <Text style={{color: Theme.accent()}}>{blogPost.content}</Text>
        </View>

    )

};

ShowScreen.navigationOptions = ({navigation}) => {

    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam('id')})}> 
            <EvilIcons name="pencil" size={35} style={{color: Theme.accent()}} />
          </TouchableOpacity>
        ),
      };
    


};


const Styles = StyleSheet.create({});

export default ShowScreen;
