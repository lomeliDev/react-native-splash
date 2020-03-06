# react-native-splash

[![N|Solid](https://lomeli.io/assets/img/logo.png)](https://lomeli.io)



## Introducción
Es un paquete para al abrir la aplicacion carge un splash con animacion

## Instalación

Instalar desde npm:

```bash
npm i @lomelidev/react-native-splash -s
```

Luego debemos importar el paquete a nuestro proyecto

```bash
import Splash from '@lomelidev/react-native-splash';
```

Una vez que lo importemos ahora si podemos empezar a trabajar con el.

## En nuestra app lo mandamos a llamar



```js
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from '@lomelidev/react-native-splash';

function loadingWait() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return {isLoading};
}

export default function App() {
  const {isLoading} = loadingWait();
  return isLoading ? (
    <Splash />
  ) : (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app H3ola Rodo3!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

Lo que acabamos de hacer es llamar nuestro splash y poner un tiempo de carga. al finalizar el tiempo de carga ya carga la aplicacion normalmente.

--Nota: assets/img/splash.png , es la ruta donde se debe encontrar la imagen del splash , crea un alias "assets": ["./assets"] para poder usarlo.



## Errores y contribuciones

Para un error escribir directamente el problema en github issues o enviarlo
al correo miguel@lomeli.io. Si desea contribuir con el proyecto por favor enviar un email.

#Miguel Lomeli , #MiguelLomeli , #Lomeli , #Toopago , #React Native , #React , #Splash