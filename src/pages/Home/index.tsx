import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView } from "react-native";

import { AuthContext } from '../../context/auth';
import Menu from './../../components/Menu';
import Filtros from "../../components/Filters";
import styles from "./styles";
import FILTROS from "../../base/FILTROS";
import { FlatList } from "react-native-gesture-handler";
import Comunicado from "../../components/Comunicado";
import MaisInfo from "../../components/MoreInfo";
import { UserPermitions } from "../../base/Enums";
import BoxDialog from "../../components/BoxDialog";
import { Item as ItemType } from "../../base/Types";
import api from "../../services/api";

interface IMoreInformations {
    exibir: boolean;
    item: ItemType | null;
}

interface IDeleteComucad {
    exibir: boolean;
    item: number;
}

function Home() {

	const { user } = useContext(AuthContext);
	const [maisInformacoes, setMaisInformacoes] = useState<IMoreInformations>({exibir: false, item: null});
	const [deletion, setDeletion] = useState<IDeleteComucad>({ exibir: false, item: 0 });
	const [communiques, setCommuniques] = useState<ItemType[]>([])
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

	useEffect(() => {
		const loadCommuniques = async () => {
			const result = await api.get('/communique')
			setCommuniques(result.data.list)
			console.log(result.data.list)
		}

		loadCommuniques()

	},[])

	useEffect(() => {
		console.log('CATEGORIA: ', selectedCategories)
		const findCommuniques = async () => {
			const result = await api.get(`/communique?categories=${selectedCategories.toString()}`)
			setCommuniques(result.data.list)
		}
		findCommuniques()
		// Refatorar para evitar muitas requests na api
	}, [selectedCategories])

    const RenderItem = ({ item }: {item: ItemType}) => {
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

	return (
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
                        <Filtros
						key={item.id}
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
						item={item}/>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.contentComunicados}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={communiques}
                    renderItem={RenderItem}
                    keyExtractor={(item: ItemType) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Home;