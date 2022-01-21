import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products'

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            {/* Render Product Component*/}

            <FlatList 
                data={products}
                renderItem={({item}) => <ProductItem item={item} /> }
                showsVerticalScrollIndicator={false}
            />

        </View>
        
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});