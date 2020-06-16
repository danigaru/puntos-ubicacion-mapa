# App móvil puntos de ubicación en mapa

### Descripción
 ~~~
   Aplicación para crear puntos de ubicación en el mapa.

   Crear nuevos puntos de ubicación
   Listar los puntos en el mapa.
   Ocultar o mostrar los puntos en el mapa.
   Listar los nombres registrados de los puntos en un modal.
 ~~~

 ### Tecnólogias utilizadas
  - React-native
    - Para la creación de la aplicación para Android & IOs.

  - react-native-maps
    - Para utilizar el mapa nativo.

### Utilizar react-native-maps

 Enlace documentación [react-native-maps](https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md)

  General una api_key para utilizar los mapas
  Enlace para [obtener_api_key](https://developers.google.com/maps/documentation/android-sdk/get-api-key).

  Luego dirigirse al archivo `AndroidManifest.xml`
  ruta : android/app/src/main/AndroidManifest.xml
  Agregar el siguiente código

```
 Dentro de <aplicacion></aplicacion>

   <application
      <meta-data
          android:name="com.google.android.geo.API_KEY"
          android:value="api_key_maps"/>
   </application>
```

## Pedir permisos de ubicación
Enlace de documentación crear propmt para pedir [api_permisos_android](https://reactnative.dev/docs/permissionsandroid)

Dirigirse al archivo `AndroidManifest.xml`

android/app/src/main/AndroidManifest.xml
```
 Antes de <aplicacion></aplicacion>

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

    <application>
        <meta-data
          android:name="com.google.android.geo.API_KEY"
          android:value="api_key_maps"/>
    </application>
```

## Nota

  > No olvides hacer `npm install` o `yarn install`  para instalar las dependencias del proyecto