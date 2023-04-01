import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { api } from "../../config";

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

interface IMoreInformations {
    exibir: boolean;
    item: ItemType | null;
}

interface IDeleteComucad {
    exibir: boolean;
    item: string;
}

function Home() {

	const { user } = useContext(AuthContext);
	const [maisInformacoes, setMaisInformacoes] = useState<IMoreInformations>({exibir: false, item: null});
	const [deletion, setDeletion] = useState<IDeleteComucad>({ exibir: false, item: '' });
	const [communiques, setCommuniques] = useState<ItemType[]>([])
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const [refresh, setRefresh] = useState<boolean>(false)

	const loadCommuniques = async () => {
		const result = await api.get('/communique')
		setCommuniques(result.data.list);
		setRefresh(false);
	}
	
	const findCommuniques = async () => {
		const result = await api.get(`/communique?categories=${selectedCategories.toString()}`)
		setCommuniques(result.data.list)
		setRefresh(false);
	}

	useEffect(() => {
		loadCommuniques();
	} ,[]);
	
	const handleScroll = () => {
		console.log('refresh')
		setRefresh(true);
		if (selectedCategories.length){
			findCommuniques();
		} else {
			loadCommuniques();
		}
	}
	
	useEffect(() => {
		findCommuniques();
		// Refatorar para evitar muitas requests na api
	}, [selectedCategories])

    const RenderItem = ({ item }: {item: ItemType}) => {
        return(
            <View style={styles.cardComponent}>
                <Comunicado
					setDeletion={(i) => setDeletion({exibir: true, item: i})}
					exibir={setMaisInformacoes}
					item={item}
					isGestorDeMural={user.roles.includes(UserPermitions.MM)}
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

			<BoxDialog
				visivel={deletion.exibir}
				menosInformacoes={() => setDeletion({exibir: false, item: ''})}
				communiqueId={deletion.item}
			/>

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
					refreshControl={
						<RefreshControl
							refreshing={refresh}
							onRefresh={() => {
								setCommuniques([]);
								handleScroll();
							}}
							tintColor='#19882C'
						/>
					}
                />
            </View>
        </View>
    )
}

export default Home;