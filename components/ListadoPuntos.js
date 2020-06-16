/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import {FlatList, Text, StyleSheet, View, Button} from 'react-native';

const ListadoPuntos = ({puntos, cerrarModalList}) => {
  if (puntos.length === 0)
    return <Text style={styles.title}>No hay puntos para mostrar</Text>;

  return (
    <Fragment>
      <Text style={styles.title}>Listado de puntos</Text>
      <FlatList
        data={puntos}
        renderItem={({item}) => <Text style={styles.item}>{item.nombre}</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        keyExtractor={(index) => index.nombre.length.toString()}
      />
      <View style={{marginTop: 20}}>
        <Button title="Cerrar" color="#841584" onPress={cerrarModalList} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#841584',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  item: {
    fontSize: 18,
    color: '#841584',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    backgroundColor: '#841584',
  },
});

export default ListadoPuntos;
