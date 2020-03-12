import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
const RenderFlatListComponent = (props) => {

    return (
        <View>
            <FlatList
                data={props.listaDeMusicas}
                renderItem={({ item }) => <RenderItems exibirMusicas={item} />}
            // keyExtractor={(item) => item.id}
            />
        </View>
    );
}
export default RenderFlatListComponent;

const RenderItems = (props) => {
  
    return (
        <View style={styles.containerDoRenderItem}>
            <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {props.exibirMusicas.trackName}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    containerDoRenderItem: {
        backgroundColor: '#FFF',
        marginTop: 20,
        height: 30,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,

    }
})