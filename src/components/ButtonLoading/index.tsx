import { ActivityIndicator } from 'react-native'

type Props = {
    size: 'small' | 'large'
    color: string
}

const ButtonLoading = ({ size, color }:Props) => {
    return <ActivityIndicator size={size} color={color}/>
}

export default ButtonLoading
