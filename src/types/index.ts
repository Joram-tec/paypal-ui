export type TransactionType = 'payment' | 'money_received' | 'invoice_sent' | 'request_sent' | 'request_canceled';

export interface Transaction {
  id: string;
  type: TransactionType;
  name: string;
  avatar?: string;
  amount: number;
  date: string;
  status: string;
}

export interface InvoiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  tax?: number;
  discount?: number;
}

export interface Tax {
  id: string;
  label: string;
  rate: number;
  description: string;
}

export interface Invoice {
  id: string;
  number: string;
  clientName: string;
  status: 'unpaid' | 'paid' | 'overdue';
  date: string;
  dueDate?: string;
  items: InvoiceItem[];
  taxes: Tax[];
  subtotal: number;
  total: number;
  terms?: string;
  reference?: string;
}

export type Screen = 'dashboard' | 'invoices' | 'createInvoice' | 'addItem' | 'addTax' | 'moreOptions' | 'preview' | 'success';
