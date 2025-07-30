import React from 'react';
import { usePaystack } from './usePaystack';
import { PaystackConfig } from './types';

interface ButtonProps extends PaystackConfig {
  text?: string;
  className?: string;
}

const PaystackButton: React.FC<ButtonProps> = ({ text = "Pay Now", className, ...config }) => {
  const { initializePayment } = usePaystack(config);
  return (
    <button onClick={initializePayment} className={className}>
      {text}
    </button>
  );
};

export default PaystackButton;
