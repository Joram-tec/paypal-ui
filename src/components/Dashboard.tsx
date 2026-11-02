import { Send, CreditCard, FileText, MoreHorizontal } from 'lucide-react';
import { Transaction, Screen } from '../types';

interface DashboardProps {
  transactions: Transaction[];
  onCreateInvoice: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function Dashboard({ transactions, onCreateInvoice, onNavigate }: DashboardProps) {
  const getAmountColor = (type: string) => {
    if (type === 'money_received' || type === 'invoice_sent') return 'text-paypal-green';
    return 'text-gray-900';
  };

  const getAmountPrefix = (type: string) => {
    if (type === 'money_received' || type === 'invoice_sent') return '+';
    if (type === 'payment' || type === 'request_sent' || type === 'request_canceled') return '-';
    return '';
  };

  return (
    <div className="pb-32">
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h1>

        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-paypal-light rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {transaction.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${getAmountColor(transaction.type)}`}>
                    {getAmountPrefix(transaction.type)}US${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>

        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('sendRequest')}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 bg-paypal-blue rounded-full flex items-center justify-center shadow-lg hover:bg-paypal-dark transition-colors">
              <Send size={28} className="text-white" />
            </div>
            <span className="text-xs text-center text-gray-700 font-medium">Send / Request</span>
          </button>

          <button
            onClick={() => onNavigate('wallet')}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 bg-paypal-blue rounded-full flex items-center justify-center shadow-lg hover:bg-paypal-dark transition-colors">
              <CreditCard size={28} className="text-white" />
            </div>
            <span className="text-xs text-center text-gray-700 font-medium">Add card or bank</span>
          </button>

          <button
            onClick={onCreateInvoice}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 bg-paypal-blue rounded-full flex items-center justify-center shadow-lg hover:bg-paypal-dark transition-colors">
              <FileText size={28} className="text-white" />
            </div>
            <span className="text-xs text-center text-gray-700 font-medium">Create an invoice</span>
          </button>

          <button
            onClick={() => onNavigate('invoices')}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 bg-paypal-blue rounded-full flex items-center justify-center shadow-lg hover:bg-paypal-dark transition-colors">
              <MoreHorizontal size={28} className="text-white" />
            </div>
            <span className="text-xs text-center text-gray-700 font-medium">More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
