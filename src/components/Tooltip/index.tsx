import React, { useState, ReactNode } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
  },
  tooltipText: {
    color: '#333',
    fontSize: 14,
  },
});

export default Tooltip;
