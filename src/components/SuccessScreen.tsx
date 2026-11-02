import { CheckCircle, ChevronLeft } from 'lucide-react';

interface SuccessScreenProps {
  onDone: () => void;
  onBack?: () => void;
}

export default function SuccessScreen({ onDone, onBack }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative">
      <div className="text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={56} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-xl font-semibold text-gray-900 mb-2">Invoice sent</h1>
        <p className="text-gray-600 mb-8">
          to joramwmuya@gmail.com
        </p>

        <button
          onClick={onDone}
          className="bg-paypal-blue text-white font-semibold py-3 px-16 rounded-full hover:bg-paypal-dark transition-colors"
        >
          Done
        </button>
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="absolute bottom-6 left-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
      )}
    </div>
  );
}
