// Importamos toda a estrutura do react aqui
import React from "react";
// Aqui importamos os componentes básicos do react native que iremos utilizar
import { View, Text } from "react-native";
import styles from "./style";

// Aqui vai ser o componente que iremos criar e mandar para o App.js
// Aqui iremos criar a função pra calcular o Imc dos valores que o usuario digitar
export default function ResultImc(props) {
    return (
        <View style={styles.resultImc}>
            {/* Aqui ele esta imprimindo o resultImc e o messageResultImc */}
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}