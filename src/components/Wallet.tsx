import { CreditCard, ChevronLeft, HelpCircle } from 'lucide-react';

interface WalletProps {
  onBack: () => void;
}

export default function Wallet({ onBack }: WalletProps) {
  return (
    <div className="min-h-screen bg-paypal-bg pb-24">
      <div className="bg-paypal-dark text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <button onClick={onBack} className="p-2 hover:bg-paypal-blue rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex items-center">
          <img
            src="/paypal-logo.svg"
            alt="PayPal"
            className="h-8"
          />
        </div>
        
        <button className="p-2 hover:bg-paypal-blue rounded-full transition-colors relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-paypal-blue flex items-center justify-center">
              <CreditCard size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Link a card</p>
              <p className="text-sm text-gray-500">Add a debit or credit card</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">PayPal balance</h3>
          <p className="text-3xl font-bold text-gray-900">$0.00</p>
          <p className="text-sm text-gray-500">Available</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Your Bank</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              PREFERRED
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">VISA</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Debit ..6277</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-4">
            <img
              src="/paypal-logo.svg"
              alt="PayPal"
              className="h-6"
            />
            <button className="flex items-center space-x-1 text-gray-600">
              <HelpCircle size={16} />
              <span className="text-sm">Help</span>
            </button>
            <span className="text-sm text-gray-600">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}
