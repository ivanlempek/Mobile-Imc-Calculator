// Importamos toda a estrutura do react aqui
import React from "react";
// Aqui importamos os componentes básicos do react native que iremos utilizar
import { View, Text } from "react-native";
// Com o styles criado já podemos importar ele aqui
import styles from "./style";

// Aqui vai ser o componente que iremos criar e mandar para o App.js
export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}