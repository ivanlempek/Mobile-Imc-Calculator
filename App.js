import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Para renderizar um componente criado em outra pasta nos precisamos primeiro importar ele
import Title from './src/components/Title';
import Main from './src/components/Main/Index';


export default function App() {
  return (
    <View style={styles.container}>
      {/* Depois de importado basta apenas chamar ele dentro das aspas 
      que o componente vai ser exibido na tela */}
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
