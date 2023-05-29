// Importamos toda a estrutura do react aqui
// Usamos o useState para gerenciar o estado que vamos utilizar
import React, { useState } from "react";
// Aqui importamos os componentes básicos do react native que iremos utilizar
import { TextInput, Text, View, TouchableOpacity, Alert } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

// Aqui vai ser o componente que iremos criar e mandar para o App.js
// Montando o formulario
// Aqui utilizamos dois campos de texto e dois inputs
// dentro do input foi inserido um placeholder e um keyboardtype
// Esse keyboardtype diz que quando o usuario clicar no input ele ira abrir o teclado numerico
export default function Form() {

    // Aqui estamos criando estados para gerenciar altura, peso, mensagem, imc e o textButton
    // useState(null) quer dizer que ele começa como nulo
    // height seria a variavel de estado height e setHeight vai ser a função que vai alterar o estado height
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    // Função que faz o calculo do IMC
    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    // Antes de fazer os calculos vamos fazer a validação
    // aqui verificamos se o peso e a altura sao diferentes de nulo
    // caso sejam, a função imcCalculator é executada
    function validationImc() {
        let inputHeight = parseFloat(height);
        let inputWeight = parseFloat(weight);

        if (height != null && isNaN(inputHeight) || weight != null && isNaN(inputWeight)) {
            Alert.alert(
                'Aviso:',
                'Digite apenas números!',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return
        }
        else if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e a altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput
                    // aqui agora vamos implementar o onchangetext que irá alterar o estado da altura com a função setHeight
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.25"
                    keyboardType="numeric"
                />
                {/* <Button
                    // colocamos aqui no button o onpress que quando o usuario clicar no botao ele ira executar a função do calculo
                    onPress={() => validationImc()}
                    title={textButton} /> */}
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton} </Text>
                </TouchableOpacity>
            </View>
            {/* Aqui estamos passando duas props que o resultImc está esperando */}
            <ResultImc messageResultImc={messageImc} resultImc={imc} />


        </View>
    );
}