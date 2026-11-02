import { Search, FileText, ChevronLeft } from 'lucide-react';

interface SendRequestProps {
  onBack: () => void;
}

export default function SendRequest({ onBack }: SendRequestProps) {
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

      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-3 shadow-sm flex items-center space-x-3 mb-6">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Name, username, email, mobile"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-paypal-blue flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4 8 4v14M5 7l8-4 8 4" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Impostor Here</p>
            </div>
          </div>
          <button className="text-paypal-blue font-medium">
            Show all contacts
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">More ways to send</h3>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <FileText size={24} className="text-gray-600" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Send an invoice</p>
              <p className="text-sm text-gray-500">Customize, track, and send invoices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
