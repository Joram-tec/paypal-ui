import { CheckCircle } from 'lucide-react';

interface SuccessScreenProps {
  onDone: () => void;
}

export default function SuccessScreen({ onDone }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={64} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Invoice Sent!</h1>
        <p className="text-gray-600 mb-8">
          Your invoice has been sent successfully to the client.
        </p>

        <button
          onClick={onDone}
          className="bg-paypal-blue text-white font-semibold py-4 px-12 rounded-xl hover:bg-paypal-dark transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
}
