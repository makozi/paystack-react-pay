import React, { ReactNode } from 'react';
import { usePaystack } from './usePaystack';
import { PaystackConfig } from './types';

interface ConsumerProps {
  config: PaystackConfig;
  children: (init: () => void) => ReactNode;
}

const PaystackConsumer: React.FC<ConsumerProps> = ({ config, children }) => {
  const { initializePayment } = usePaystack(config);
  return <>{children(initializePayment)}</>;
};

export default PaystackConsumer;
