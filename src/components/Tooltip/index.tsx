import React, { useState, ReactNode } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./styles";

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
}

const Tooltip = ({ children, tooltipText }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const toggleTooltip = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleTooltip}>{children}</TouchableOpacity>
      <Modal animationType="fade" transparent visible={visible}>
        <View style={styles.modalContainer}>
          <Icon
            size={30}
            color={'white'}
            name='close'
            onPress={toggleTooltip}
          />
          <View style={styles.tooltipContainer}>
            <Text onPress={toggleTooltip} style={styles.tooltipText}>{tooltipText}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Tooltip;
