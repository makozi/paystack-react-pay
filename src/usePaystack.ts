import { useCallback } from 'react';
import PaystackPop from '@paystack/inline-js';
import { PaystackConfig } from './types';

export const usePaystack = (config: PaystackConfig) => {
  const initializePayment = useCallback(() => {
    const handler = new PaystackPop();

    handler.newTransaction({
      key: config.publicKey,
      email: config.email,
      amount: config.amount,
      currency: config.currency || 'NGN',
      reference: config.reference || `${new Date().getTime()}`,
      metadata: config.metadata,
      onSuccess: config.onSuccess,
      onCancel: config.onClose
    });
  }, [config]);

  return { initializePayment };
};
