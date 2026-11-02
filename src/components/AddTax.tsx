import { useState } from 'react';
import { Tax } from '../types';

interface AddTaxProps {
  onBack: () => void;
  onAddTax: (tax: Tax) => void;
}

export default function AddTax({ onBack, onAddTax }: AddTaxProps) {
  const [label, setLabel] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!label || !rate) return;

    const tax: Tax = {
      id: Date.now().toString(),
      label,
      rate: parseFloat(rate),
      description
    };

    onAddTax(tax);
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
        <h1 className="text-xl font-semibold text-white">Add Tax</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g., Sales Tax, VAT"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g., 10"
            step="0.01"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
            rows={3}
            className="w-full outline-none text-gray-900 placeholder-gray-400 resize-none"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={!label || !rate}
          className="w-full bg-paypal-blue text-white font-semibold py-4 rounded-xl hover:bg-paypal-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
}
