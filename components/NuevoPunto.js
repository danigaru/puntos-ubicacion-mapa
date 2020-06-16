/* eslint-disable prettier/prettier */
import React, {useState, Fragment} from 'react';
import {Text, TextInput, StyleSheet, Button, View} from 'react-native';

const NuevoPunto = ({handlePress, cerrarModalList}) => {
  const [nombre, setNombre] = useState('');

  const handlePresPunto = () => {
    handlePress(nombre);
    setNombre('');
  };

  return (
    <Fragment>
      <Text style={styles.modalText}>Ingresar nuevo punto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del punto"
        onChangeText={(texto) => setNombre(texto)}
        value={nombre}
      />
      <Button title="guardar punto" color="#841584" onPress={handlePresPunto} />
      <View style={styles.button}>
        <Button title="Cerrar" color="red" onPress={cerrarModalList} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#841584',
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#841584',
    borderBottomWidth: 2,
    width: '100%',
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    marginTop: 10,
  },
});

export default NuevoPunto;
