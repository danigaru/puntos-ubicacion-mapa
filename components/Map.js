/* eslint-disable prettier/prettier */
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const Map = ({handleLongPress, puntos, showPuntos, heightMapa}) => {
  const map = {
    width: '100%',
    height: heightMapa,
  };

  return (
    <MapView
      style={map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.422,
        longitudeDelta: 0.421,
      }}
      onLongPress={(e) => handleLongPress(e)}>
      {showPuntos &&
        puntos.map((punto, index) => (
          <Marker coordinate={punto.punto} title={punto.nombre} key={index} />
        ))}
    </MapView>
  );
};

export default Map;
