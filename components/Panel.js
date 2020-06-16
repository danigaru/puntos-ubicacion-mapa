/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const Panel = ({handleClickListar, mostrarOcultarPuntos}) => {
  return (
    <View style={styles.containerBoton}>
      <Button
        title="Listar puntos"
        color="#841584"
        onPress={handleClickListar}
      />
      <Button
        title="Mostrar/Ocultar"
        color="#841584"
        onPress={mostrarOcultarPuntos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerBoton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '10%',
  },
});

export default Panel;
