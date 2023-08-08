import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import Tooltip from 'rn-tooltip';

interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
}

const TooltipComponet = ({ children, tooltipText }: TooltipProps) => (
  <Tooltip
    popover={<Text>{tooltipText}</Text>}
    actionType='press'
    backgroundColor='#FFF'
    overlayColor='rgba(0, 0, 0, 0.3)'
    width={'95%'}
    height={'10%'}
  >
    {children}
  </Tooltip>
);

export default TooltipComponet;
