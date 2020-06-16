/* eslint-disable prettier/prettier */
import React, {Fragment, useState, useEffect} from 'react';
import {View, StyleSheet, Alert, PermissionsAndroid} from 'react-native';
import {ModalGlobal, Map, NuevoPunto, Panel} from './components';
import ListadoPuntos from './components/ListadoPuntos';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [puntos, setPuntos] = useState([]);
  const [showModalList, setShowModalList] = useState(false);
  const [showPuntos, setShowPuntos] = useState(true);
  const [heightMapa, setHeightMapa] = useState('100%');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de ubicación de la aplicación MapaGaru',
          message:
            'La aplicación MapaGaru necesita acceso a tu ubicación para que puedas crear puntos de ubicación',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Dar permiso',
        },
      );

      if (!granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Permiso de ubicación de la aplicación MapaGaru',
          'Debe dar permisos para tener una mejor experiencia en la aplicación MapaGaru',
          [{title: 'Dar permiso', onPress: () => requestLocationPermission()}],
        );
      }
    } catch (err) {
      Alert.alert('Ocurrió un error Intente de nuevo');
    }
  };

  const handleLongPress = ({nativeEvent}) => {
    setPuntoTemp(nativeEvent.coordinate);
    setModalVisible(true);
  };

  const handlePress = (nombre) => {
    if (nombre.trim() === '') {
      Alert.alert('El nombre del punto es requerido');
      return;
    }

    const newPunto = {
      punto: puntoTemp,
      nombre,
    };
    setPuntos([...puntos, newPunto]);
    setModalVisible(false);
    setHeightMapa('90%');
  };

  const handleClickListar = () => {
    setModalVisible(true);
    setShowModalList(true);
  };

  const cerrarModalList = () => {
    setModalVisible(false);
    setShowModalList(false);
  };

  const mostrarOcultarPuntos = () => {
    setShowPuntos(!showPuntos);
  };

  return (
    <Fragment>
      <View styles={styles.container}>
        <Map
          handleLongPress={handleLongPress}
          puntos={puntos}
          showPuntos={showPuntos}
          heightMapa={heightMapa}
        />
        <ModalGlobal modalVisible={modalVisible}>
          <View style={styles.containerModal}>
            <View style={styles.modalView}>
              {showModalList ? (
                <Fragment>
                  <ListadoPuntos
                    puntos={puntos}
                    cerrarModalList={cerrarModalList}
                  />
                </Fragment>
              ) : (
                <NuevoPunto
                  handlePress={handlePress}
                  cerrarModalList={cerrarModalList}
                />
              )}
            </View>
          </View>
        </ModalGlobal>

        {puntos.length > 0 && (
          <Panel
            handleClickListar={handleClickListar}
            mostrarOcultarPuntos={mostrarOcultarPuntos}
          />
        )}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    maxHeight: '75%',
  },
});

export default App;
