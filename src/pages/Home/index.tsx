import React, { useState, useContext } from "react";
import { View, ScrollView } from "react-native";

import { AuthContext } from '../../context/auth';
import Menu from './../../components/Menu';
import Filtros from "../../components/Filters";
import styles from "./styles";
import FILTROS from "../../base/FILTROS";
import { FlatList } from "react-native-gesture-handler";
import Comunicado from "../../components/Comunicado";
import MaisInfo from "../../components/MoreInfo";
import { Item } from "../../base/Types";
import { UserPermitions } from "../../base/Enums";
import BoxDialog from "../../components/BoxDialog";

const EXEMPLOCOMUNICADO: Item[] = [
	{
        id: 1,
		title: "Turma de AP2",
		contents: "Bom dia turma de AP2, Informamos que hoje dia 03/10/2022, e dia 04/10/2022, não havera aula. Motivo: o professor está com covid19",
		date: "2022-09-30",
		category: "Avisos",
		//OBS.: o card com imagem ou com um conteudo que utrapasse X caraceres deve ter o botão saiba mais
		// se tem img, coloca apenas o começo do conteudo(texto) até X caracteres seguindo com botão saiba mais
		// se apenas o conteudo, mas que esse utrapasse X, colocamos até X caracteres acompanhando o botão saiba mais
	},

	{
        id: 2,
		title: "XVIII Semana da Informatica ",
		contents: "A partir do dia 25/10 começa XVIII semana da informatica.",
		img: "https://www.focus.jor.br/wp-content/uploads/2021/11/IFCE-ICT-550x309.jpeg",
		referenceLink: ["https://www.even3.com.br/eventos?todos=true&q=informatica"],
		date: "2022-09-30",
		category: "Eventos",
	},

	{
        id: 3,
		title: "TI nas pequenas empresas",
		contents: "Como a TI vem acelerando cada vez mais os pequenos negócios? participe no dia 01/10/2022 no auditorio principal.",
		date: "2022-09-28",
		category: "Palestras",
	},

	{
        id: 4,
		title: "Alunos do IFCE Ganham competição",
		contents: "5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.",
		referenceLink: ['https://github.com/pedroemanuellima', 'https://www.even3.com.br/eventos?todos=true&q=informatica'],
		date: "2022-30-17",
		category: "Notícias",
	},

    {
        id: 5,
		title: "Alunos do IFCE Ganham competição",
		contents: "5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.",
		date: "2022-30-17",
		category: "Notícias",
	},

    {
        id: 6,
		title: "Alunos do IFCE Ganham competição",
		contents: "5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência. 5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.5 alunos do ifce crato ganham competição do hackatch da americana future. Os participantes da competição apresentaram soluções para problemas globais usando inteligência artificial e aprendizado de máquina. Incluindo soluções de conservação de água, identificar áreas de fome, monitorar surtos de doenças e criar dispositivos médicos para pessoas com deficiência.",
		date: "2022-30-17",
		category: "Notícias",
	},
]

interface IMoreInformations {
    exibir: boolean;
    item: Item | null;
}

interface IDeleteComucad {
    exibir: boolean;
    item: number;
}

function Home(){

	const { user } = useContext(AuthContext);
	const [maisInformacoes, setMaisInformacoes] = useState<IMoreInformations>({exibir: false, item: null});
	const [deletion, setDeletion] = useState<IDeleteComucad>({ exibir: false, item: 0 });

    const RenderItem = ({ item }: {item: Item}) => {
        return(
            <View style={styles.cardComponent}>
                <Comunicado
					setDeletion={(i) => setDeletion({exibir: true, item: i})}
					exibir={setMaisInformacoes}
					item={item}
					isGestorDeMural={user.permicoes.includes(UserPermitions.GM)}
				/>
            </View>
        )
    }

    return(
        <View style={styles.container}>
			{(maisInformacoes.exibir && maisInformacoes.item) &&
				<MaisInfo
					visivel={maisInformacoes.exibir}
					item={maisInformacoes.item}
					bgc='#FFF1BF'
					setVisivel={setMaisInformacoes}
				/>
			}

			<BoxDialog visivel={deletion.exibir} menosInformacoes={() => setDeletion({exibir: false, item: 0})} />

            <Menu/>

            <View style={styles.filtros}>
                <ScrollView
                    horizontal
                    centerContent
                    contentContainerStyle={{flexGrow: 1, justifyContent: "space-evenly"}}
                >
                    {FILTROS.map(item => (
                        <Filtros key={item.id} item={item}/>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.contentComunicados}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={EXEMPLOCOMUNICADO}
                    renderItem={RenderItem}
                    keyExtractor={(item: Item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Home;