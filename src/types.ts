export interface PaystackConfig {
  publicKey: string;
  email: string;
  amount: number; // amount in kobo
  reference?: string;
  currency?: string;
  metadata?: Record<string, any>;
  onSuccess: (response: any) => void;
  onClose?: () => void;
}
