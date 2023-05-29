// Importamos toda a estrutura do react aqui
import React from "react";
// Aqui importamos os componentes básicos do react native que iremos utilizar
import { View } from "react-native";
// Aqui vamos importar o form que criamos
import Form from "../Form/Index";

// Aqui vai ser o componente que iremos criar e mandar para o App.js
export default function Main() {
    return (
        <View>
            <Form />
        </View>
    );
}