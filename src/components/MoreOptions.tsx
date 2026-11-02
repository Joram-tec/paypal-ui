import { useState } from 'react';
import { Invoice } from '../types';

interface MoreOptionsProps {
  invoice: Invoice;
  onBack: () => void;
  onSave: (options: { terms?: string; dueDate?: string; reference?: string }) => void;
}

export default function MoreOptions({ invoice, onBack, onSave }: MoreOptionsProps) {
  const [terms, setTerms] = useState(invoice.terms || '');
  const [invoiceNumber, setInvoiceNumber] = useState(invoice.number);
  const [dueDate, setDueDate] = useState(invoice.dueDate || '');
  const [reference, setReference] = useState(invoice.reference || '');
  const [showDueDateModal, setShowDueDateModal] = useState(false);

  const dueDateOptions = [
    'Due on receipt',
    'No due date',
    'Due in 10 days',
    'Due in 15 days',
    'Due in 30 days',
    'Due in 45 days',
    'Due in 60 days',
    'Due in 90 days'
  ];

  const handleSave = () => {
    onSave({
      terms,
      dueDate,
      reference
    });
    onBack();
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
        <h1 className="text-xl font-semibold text-white">More Options</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Invoice number</label>
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="0001"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Due date</label>
          <button
            onClick={() => setShowDueDateModal(true)}
            className="w-full text-left outline-none text-gray-900 placeholder-gray-400"
          >
            {dueDate || 'Select due date'}
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Terms & conditions</label>
          <textarea
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            placeholder="Enter terms and conditions"
            rows={4}
            className="w-full outline-none text-gray-900 placeholder-gray-400 resize-none"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Reference</label>
          <input
            type="text"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Optional reference number"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-paypal-blue text-white font-semibold py-4 rounded-xl hover:bg-paypal-dark transition-colors"
        >
          Save
        </button>
      </div>

      {showDueDateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Select Due Date</h2>
              <button
                onClick={() => setShowDueDateModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <div className="space-y-2">
              {dueDateOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setDueDate(option);
                    setShowDueDateModal(false);
                  }}
                  className={`w-full p-4 rounded-xl text-left transition-colors ${
                    dueDate === option
                      ? 'bg-paypal-blue text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
