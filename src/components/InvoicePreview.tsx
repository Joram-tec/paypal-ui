import { Invoice } from '../types';

interface InvoicePreviewProps {
  invoice: Invoice;
  onBack: () => void;
  onSend: () => void;
}

export default function InvoicePreview({ invoice, onBack, onSend }: InvoicePreviewProps) {
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
        <h1 className="text-xl font-semibold text-white">Preview</h1>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-paypal-dark">INVOICE</h2>
                <p className="text-gray-500">{invoice.number}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium text-gray-900">{invoice.date}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Bill to</p>
              <p className="font-medium text-gray-900">{invoice.clientName || 'Client'}</p>
            </div>

            {invoice.dueDate && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Due date</p>
                <p className="font-medium text-gray-900">{invoice.dueDate}</p>
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Items</h3>
            
            {invoice.items.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No items</p>
            ) : (
              <div className="space-y-4 mb-6">
                {invoice.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-sm text-gray-600">
                        US${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      US${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>US${invoice.subtotal.toFixed(2)}</span>
              </div>
              
              {invoice.taxes.map((tax) => (
                <div key={tax.id} className="flex justify-between text-gray-600">
                  <span>{tax.label} ({tax.rate}%)</span>
                  <span>US${(invoice.subtotal * (tax.rate / 100)).toFixed(2)}</span>
                </div>
              ))}

              <div className="flex justify-between font-bold text-gray-900 text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>US${invoice.total.toFixed(2)}</span>
              </div>
            </div>

            {invoice.terms && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Terms & conditions</p>
                <p className="text-sm text-gray-700">{invoice.terms}</p>
              </div>
            )}

            {invoice.reference && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Reference</p>
                <p className="text-sm text-gray-700">{invoice.reference}</p>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onSend}
          disabled={invoice.items.length === 0}
          className="w-full mt-6 bg-paypal-blue text-white font-semibold py-4 rounded-xl hover:bg-paypal-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
}
