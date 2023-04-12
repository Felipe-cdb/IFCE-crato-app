import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, ScrollView } from "react-native";
import { RefreshControl } from 'react-native-gesture-handler';

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
	const [refreshing, setRefreshing] = useState<boolean>(true)
	
	const loadCommuniques = () => {
		api.get('/communique')
		.then((res: any) => {
			setCommuniques(res.data.list);
			setRefreshing(false);
		})
		.catch((error: any) => {
			setRefreshing(false);
		})
	}
	
	const findCommuniques = () => {
		api.get(`/communique?categories=${selectedCategories.toString()}`)
		.then((res: any) => {
			setCommuniques(res.data.list);
			setRefreshing(false);
		})
		.catch((error: any) => {
			setRefreshing(false);
		})
	}
	
	const onRefresh = useCallback(() => {
		setRefreshing(true);
		if(selectedCategories.length) findCommuniques();
		else loadCommuniques();
  	}, [selectedCategories, refreshing]);
	
	
	useEffect(() => {
		if(selectedCategories.length) findCommuniques();
		else loadCommuniques();
	}, [refreshing, selectedCategories])

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

	const ItemSeparatorComponent = () => {
        return(
            <View style={styles.lineSeparator}/>
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
							key={item.key}
							selectedCategories={selectedCategories}
							setSelectedCategories={setSelectedCategories}
							item={item.label}
						/>
                    ))}
                </ScrollView>
            </View>

			<View style={[styles.contentComunicados, {flex: 1}]}>
				<FlatList
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={ItemSeparatorComponent}
					data={communiques}
					renderItem={RenderItem}					
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
							colors={['#19882C']}
							tintColor={'#19882C'}
						/>}
					keyExtractor={(item: ItemType) => item.id.toString()}
				/>
			</View>
        </View>
    )
}

export default Home;