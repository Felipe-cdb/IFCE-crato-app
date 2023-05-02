
import { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IRefectory, MenuAnswer } from '../base/Interfaces'
import { api } from '../config'
import { addDays, isAfter } from 'date-fns';

interface RefectoryProviderProps {
    children: ReactNode;
}

type RefectoryContextProps = {
  refectory: IRefectory | null
  setRefectoryStoraged(refectoryData: IRefectory): Promise<void>
  clearRefectory(): void
  checkboxAnswerFields: MenuAnswer
  setCheckboxAnswerFields: React.Dispatch<React.SetStateAction<MenuAnswer>>
  loadCurrentRefectory(): Promise<IRefectory | null>
}

export const RefectoryContext = createContext({} as RefectoryContextProps)

const RefectoryProvider = ({ children }: RefectoryProviderProps) => {
    const [refectory, setRefectory] = useState<IRefectory | null>(null);
    const [checkboxAnswerFields, setCheckboxAnswerFields] = useState<MenuAnswer>({
        breakfast: 0,
        lunch: 0,
        afternoonSnack: 0,
        dinner: 0,
        nightSnack: 0
    })

    useEffect(() => {
        const cachedRefectory = async () => {
            const storagedRefectory = await AsyncStorage.getItem('@refectory');
            if(storagedRefectory){
                const parsedRefectory: IRefectory = JSON.parse(storagedRefectory)
                const dateToCompare = addDays(parsedRefectory.vigencyDate, 1)

                if(isAfter(new Date().valueOf(), dateToCompare)) {
                    await loadCurrentRefectory()     
                }

                if (!refectory) {
                    setRefectory(JSON.parse(storagedRefectory))
                }
            } else {
                await loadCurrentRefectory()
            }
        }

        cachedRefectory()
    }, [])

    const loadCurrentRefectory = async (): Promise<IRefectory | null> => {
        try {
            const res = await api.get(`/refectory/current-refectory`);
            if (!!res.data) {
                const response = res.data;
                const refectoryData = {
                    id: response.id,
                    menuUrl: response.menuUrl,
                    startAnswersDate: response.startAnswersDate,
                    status: response.status,
                    vigencyDate: response.vigencyDate,
                    hasAnswered: response.hasAnswered
                }

                await setRefectoryStoraged(refectoryData)
                return refectoryData;
            };

            await clearRefectory()
            return null;
        } catch (error: any) {
            return null
        }
    }

    const setRefectoryStoraged = async (refectoryData: IRefectory) => { 
        await AsyncStorage.removeItem('@refectory')
        await AsyncStorage.setItem('@refectory', JSON.stringify({
            id: refectoryData.id,
            menuUrl: refectoryData.menuUrl,
            startAnswersDate: refectoryData.startAnswersDate,
            status: refectoryData.status,
            vigencyDate: refectoryData.vigencyDate,
            hasAnswered: refectoryData.hasAnswered
        }))
        setRefectory({
            id: refectoryData.id,
            menuUrl: refectoryData.menuUrl,
            startAnswersDate: refectoryData.startAnswersDate,
            status: refectoryData.status,
            vigencyDate: refectoryData.vigencyDate,
            hasAnswered: refectoryData.hasAnswered
        })
    }

    const clearRefectory = async () => {
        setRefectory(null)
        await AsyncStorage.removeItem('@refectory')
    }

    return (
        <RefectoryContext.Provider value={{
            clearRefectory,
            refectory,
            setRefectoryStoraged,
            checkboxAnswerFields,
            setCheckboxAnswerFields,
            loadCurrentRefectory
        }}>
            {children}
        </RefectoryContext.Provider>
    )
}

export default RefectoryProvider;
