import { Plus, Trash2 } from 'lucide-react';
import { Invoice } from '../types';

interface CreateInvoiceProps {
  invoice: Invoice;
  onBack: () => void;
  onAddItem: () => void;
  onAddTax: () => void;
  onMoreOptions: () => void;
  onPreview: () => void;
  onDeleteItem: (itemId: string) => void;
}

export default function CreateInvoice({
  invoice,
  onBack,
  onAddItem,
  onAddTax,
  onMoreOptions,
  onPreview,
  onDeleteItem
}: CreateInvoiceProps) {
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
        <h1 className="text-xl font-semibold text-white">Create Invoice</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <input
            type="text"
            placeholder="Client name"
            value={invoice.clientName}
            onChange={() => {}}
            className="w-full outline-none text-gray-900 font-medium placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Items</h2>
          </div>
          
          {invoice.items.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 mb-4">No items added yet</p>
              <button
                onClick={onAddItem}
                className="text-paypal-blue font-medium hover:text-paypal-dark transition-colors"
              >
                Add your first item
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {invoice.items.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm text-gray-600">
                      US${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="font-semibold text-gray-900">
                      US${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => onDeleteItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={onAddItem}
            className="w-full p-4 flex items-center justify-center space-x-2 text-paypal-blue font-medium hover:bg-gray-50 transition-colors"
          >
            <Plus size={20} />
            <span>Add Item</span>
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">Taxes</p>
            <p className="text-sm text-gray-500">{invoice.taxes.length} tax added</p>
          </div>
          <button
            onClick={onAddTax}
            className="text-paypal-blue font-medium hover:text-paypal-dark transition-colors"
          >
            Add Tax
          </button>
        </div>

        <button
          onClick={onMoreOptions}
          className="w-full bg-white rounded-xl p-4 shadow-sm flex items-center justify-between"
        >
          <span className="font-medium text-gray-900">More Options</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </button>

        <div className="bg-white rounded-xl p-4 shadow-sm space-y-2">
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
          <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>US${invoice.total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={onPreview}
          disabled={invoice.items.length === 0}
          className="w-full bg-paypal-blue text-white font-semibold py-4 rounded-xl hover:bg-paypal-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Preview
        </button>
      </div>
    </div>
  );
}
