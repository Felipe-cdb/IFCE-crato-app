import React from "react";
import Modal from 'react-native-modal';
import { View, ActivityIndicator } from 'react-native';

import styles from "./styles";

type LoadingProps = {
    visivel: boolean;
}

function ScreenLoad({ visivel }: LoadingProps) {
    
    return(
        <Modal
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            isVisible={visivel}
            backdropOpacity={0.8}
            statusBarTranslucent={true}
        >
            <View style={styles.viewModal}>
                <ActivityIndicator size="large" color="#0F0"/>
            </View>
            
        </Modal>
    );
}

export default ScreenLoad;