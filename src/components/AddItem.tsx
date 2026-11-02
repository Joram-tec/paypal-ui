import { useState } from 'react';
import { InvoiceItem } from '../types';

interface AddItemProps {
  onBack: () => void;
  onAddItem: (item: InvoiceItem) => void;
}

export default function AddItem({ onBack, onAddItem }: AddItemProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [tax, setTax] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discount, setDiscount] = useState('');

  const handleSave = () => {
    if (!name || !price) return;

    const item: InvoiceItem = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity) || 1,
      tax: tax ? parseFloat(tax) : undefined,
      discount: hasDiscount && discount ? parseFloat(discount) : undefined
    };

    onAddItem(item);
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
        <h1 className="text-xl font-semibold text-white">Add Item</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Item name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter item name"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows={3}
            className="w-full outline-none text-gray-900 placeholder-gray-400 resize-none"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">US$</span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              step="0.01"
              className="flex-1 outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="1"
            min="1"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tax (%)</label>
          <input
            type="number"
            value={tax}
            onChange={(e) => setTax(e.target.value)}
            placeholder="Optional"
            step="0.01"
            className="w-full outline-none text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount</label>
            <p className="text-sm text-gray-500">Add discount to this item</p>
          </div>
          <button
            onClick={() => setHasDiscount(!hasDiscount)}
            className={`w-12 h-6 rounded-full transition-colors ${hasDiscount ? 'bg-paypal-blue' : 'bg-gray-300'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${hasDiscount ? 'translate-x-6' : 'translate-x-0.5'}`} />
          </button>
        </div>

        {hasDiscount && (
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount amount</label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">US$</span>
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                className="flex-1 outline-none text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={!name || !price}
          className="w-full bg-paypal-blue text-white font-semibold py-4 rounded-xl hover:bg-paypal-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
    </div>
  );
}
