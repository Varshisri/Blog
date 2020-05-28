import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
const ShowScreen = ({ navigation }) => {
    const checkId = navigation.getParam('id');
    const { state } = useContext(BlogContext);

    const blogPost = state.find(
        blogPost => blogPost.id === checkId
    );

    return (
        <View>
            <Text>
                {blogPost.title}-{blogPost.id}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({ });

export default ShowScreen;