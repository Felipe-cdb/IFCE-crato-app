import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView } from "react-native";
import { AuthContext } from '../../context/auth';
import { UserPermitions } from "../../base/Enums";
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import Menu from "../../components/Menu";
import { RefectoryChoices } from '../../components/RefectoryChoices';
import { Button } from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

interface MenuData {
    menuBreakfast: string;
    menuLunch: string;
    menuAfternoonSnack: string;
    menuDinner: string;
    menuEveningSnack: string;
}
function Refectory() {
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    // const [menuBreakfast, setMenuBreakfast] = useState("");
    // const [menuLunch, setMenuLunch] = useState("");
    // const [menuAfternoonSnack, setMenuAfternoonSnack] = useState("");
    // const [menuDinner, setMenuDinner] = useState("");
    // const [menuEveningSnack, setMenuEveningSnack] = useState("");

    const [menuBreakfast, setMenuBreakfast] = useState("Café com leite, Bolacha");
    const [menuLunch, setMenuLunch] = useState("Arroz, Feijão, bife grelhado, suco de Laranja");
    const [menuAfternoonSnack, setMenuAfternoonSnack] = useState("Sanduíche de presunto e queijo, suco de abacaxi");
    const [menuDinner, setMenuDinner] = useState("Macarrão ao alho e óleo, bife à parmegiana, suco de uva");
    const [menuEveningSnack, setMenuEveningSnack] = useState("achocolatado, biscoitos");

    const [choiceBreakfast, setChoiceBreakfast] = useState(false);
    const [choiceLunch, setChoiceLunch] = useState(false);
    const [choiceAfternoonSnack, setChoiceAfternoonSnack] = useState(false);
    const [choiceDinner, setChoiceDinner] = useState(false);
    const [choiceEveningSnack, setChoiceEveningSnack] = useState(false);
    console.log(choiceBreakfast, choiceLunch, choiceAfternoonSnack, choiceDinner, choiceEveningSnack)
    // Faz a chamada à API e atualiza o estado com os dados recuperados
    // useEffect(() => {
    //     // Fazer chamada da API e setar os valores dos cardápios nos estados
    //     fetch("http://exemplo.com/cardapio")
    //         .then((response) => response.json())
    //         .then((data: MenuData) => {
    //             setMenuBreakfast(data.menuBreakfast);
    //             setMenuLunch(data.menuLunch);
    //             setMenuAfternoonSnack(data.menuAfternoonSnack);
    //             setMenuDinner(data.menuDinner);
    //             setMenuEveningSnack(data.menuEveningSnack);
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
                            <Text style={{ fontWeight: 'bold' }}>Café da Manhã </Text>
                            - {menuBreakfast}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Almoço </Text>
                            - {menuLunch}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Lanche da Tarde </Text>
                            - {menuAfternoonSnack}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Janta </Text>
                            - {menuDinner}
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.subtitle}>
                            <Text style={{ fontWeight: 'bold' }}>Lanche da Noite </Text>
                            - {menuEveningSnack}
                        </Text>
                    </View>
                </View>

                <View style={styles.SelectOp}>
                    <RefectoryChoices
                        onSelectBreakfast={(selected: boolean) => setChoiceBreakfast(selected)}
                        onSelectLunch={(selected: boolean) => setChoiceLunch(selected)}
                        onSelectAfternoonSnack={(selected: boolean) => setChoiceAfternoonSnack(selected)}
                        onSelectDinner={(selected: boolean) => setChoiceDinner(selected)}
                        onSelectEveningSnack={(selected: boolean) => setChoiceEveningSnack(selected)}
                    />
                </View>
                {/* Abaixo estou colocando a permisão GM para não ficar alterando os de muitos arquivos, 
                por favor alterar para GR após os testes */}
                {user.roles.includes(UserPermitions.RM) &&
                    <View style={styles.ButtonGR}>
                        <Button
                            title="Formulários"
                            onPress={() => navigation.navigate('Formulários do Refeitório')}
                            iconName={<Icon name="clipboard-edit-outline" size={25} color="white" />}
                        />
                    </View>
                }
                <View style={styles.Buttons}>
                    <Button title="Voltar" onPress={() => { }} isBackButton />
                    <Button title="Enviar" onPress={() => handleButtonPress()} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Refectory;