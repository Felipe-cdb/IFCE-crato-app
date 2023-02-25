import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from "react-native";

import Menu from "../../components/Menu";
import { OpcoesDesejadaCardapio } from '../../components/OpcoesDesejadaCardapio';
import { Button } from '../../components/Button';

import styles from "./styles";

// Obter a data atual para usar como teste depois apagaremos isso 
// para pegar a data real do qual o formulario atual pertence
const dataForms = new Date();
const dia = dataForms.getDate();
const mes = dataForms.getMonth() + 1;
const ano = dataForms.getFullYear();
const dia2 = dataForms.getDate() - 1;

const dataFormatada = dia.toString().padStart(2, '0') + '-' + mes.toString().padStart(2, '0') + '-' + ano;
const dataFormatada2 = dia2.toString().padStart(2, '0') + '-' + mes.toString().padStart(2, '0') + '-' + ano + '  ás 18h';
const statusForms = true

interface CardapioData {
    cardapioJanta: string;
    cardapioLancheNoite: string;
}
function Refectory() {

    // const [cardapioJanta, setCardapioJanta] = useState("");
    // const [cardapioLancheNoite, setCardapioLancheNoite] = useState("");
    const [cardapioJanta, setCardapioJanta] = useState("Macarrão ao alho e óleo, bife à parmegiana, suco de uva");
    const [cardapioLancheNoite, setCardapioLancheNoite] = useState("Sanduíche de presunto e queijo, suco de abacaxi");

    const [opcaoCafe, setOpcaoCafe] = useState(false);
    const [opcaoAlmoco, setOpcaoAlmoco] = useState(false);
    const [opcaoLancheTarde, setOpcaoLancheTarde] = useState(false);
    const [opcaoJanta, setOpcaoJanta] = useState(false);
    const [opcaoLancheNoite, setOpcaoLancheNoite] = useState(false);
    console.log(opcaoCafe, opcaoAlmoco, opcaoLancheTarde, opcaoJanta, opcaoLancheNoite)
    // Faz a chamada à API e atualiza o estado com os dados recuperados
    // useEffect(() => {
    //     // Fazer chamada da API e setar os valores dos cardápios nos estados
    //     fetch("http://exemplo.com/cardapio")
    //         .then((response) => response.json())
    //         .then((data: CardapioData) => {
    //             setCardapioJanta(data.cardapioJanta);
    //             setCardapioLancheNoite(data.cardapioLancheNoite);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    function handleButtonPress() {
        console.log('Button pressed');
    }

    return (
        <View style={styles.container}>
            <Menu />
            <ScrollView >
                <Text style={styles.titlePage}>Refeitório</Text>
                <View style={styles.dateForms}>
                    <Text style={styles.statusForms}>
                        Status:
                        <Text style={{ color: statusForms ? "#379936" : "#C91517" }}>
                            {statusForms ? " Em Aberto" : " Finalizado"}
                        </Text>
                    </Text>
                    <Text style={styles.dateFormsReference}>Formulário do dia {dataFormatada}</Text>
                    <Text style={styles.dateFormsClosing}>
                        <Text style={{ color: '#C91517' }}>Encerramento  </Text>
                        {dataFormatada2}
                    </Text>
                </View>

                <View style={styles.cardapio}>
                    <Text style={styles.title}>Cardápio:</Text>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Janta </Text>
                            - {cardapioJanta}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Lanche da Noite </Text>
                            - {cardapioLancheNoite}
                        </Text>
                    </View>
                </View>

                <View style={styles.SelectOp}>
                    <OpcoesDesejadaCardapio
                        onSelectCafe={(selected: boolean) => setOpcaoCafe(selected)}
                        onSelectAlmoco={(selected: boolean) => setOpcaoAlmoco(selected)}
                        onSelectLancheTarde={(selected: boolean) => setOpcaoLancheTarde(selected)}
                        onSelectJanta={(selected: boolean) => setOpcaoJanta(selected)}
                        onSelectLancheNoite={(selected: boolean) => setOpcaoLancheNoite(selected)}
                    />
                </View>
                <View style={styles.Buttons}>
                    <Button title="Voltar" onPress={() => { }} isBackButton />
                    <Button title="Salvar" onPress={() => handleButtonPress()} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Refectory;