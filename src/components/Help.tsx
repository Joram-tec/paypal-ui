import { ChevronLeft } from 'lucide-react';

interface HelpProps {
  onBack: () => void;
}

export default function Help({ onBack }: HelpProps) {
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

      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Help Center</h1>
        
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <p className="text-gray-600">How can we help you today?</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-600">Contact PayPal support for assistance.</p>
        </div>
      </div>
    </div>
  );
}
