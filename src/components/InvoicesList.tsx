import { Search, Plus } from 'lucide-react';
import { Invoice } from '../types';

interface InvoicesListProps {
  invoices: Invoice[];
  onBack: () => void;
  onCreateInvoice: () => void;
}

export default function InvoicesList({ invoices, onBack, onCreateInvoice }: InvoicesListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'unpaid':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid':
        return 'Paid';
      case 'unpaid':
        return 'Unpaid (Sent)';
      case 'overdue':
        return 'Overdue';
      default:
        return status;
    }
  };

  return (
    <div className="pb-24">
      <div className="px-4 py-4 flex items-center space-x-3">
        <button
          onClick={onBack}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-white">Invoices</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-3 shadow-sm flex items-center space-x-3">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search invoices"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
            <span className="text-gray-700 font-medium">Filter</span>
            <span className="text-paypal-blue font-medium">Active</span>
          </div>
          <div className="flex-1 bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
            <span className="text-gray-700 font-medium">Status</span>
            <span className="text-paypal-blue font-medium">All</span>
          </div>
        </div>

        <div className="space-y-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{invoice.number}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                  {getStatusText(invoice.status)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{invoice.clientName}</p>
                  <p className="text-sm text-gray-500">{invoice.date}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  US${invoice.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onCreateInvoice}
        className="fixed bottom-24 right-4 w-14 h-14 bg-paypal-blue rounded-full flex items-center justify-center shadow-lg hover:bg-paypal-dark transition-colors z-40"
      >
        <Plus size={28} className="text-white" />
      </button>
    </div>
  );
}
