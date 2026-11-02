import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';

interface LoginPasswordProps {
  onBack: () => void;
  onSubmit: () => void;
}

export default function LoginPassword({ onBack, onSubmit }: LoginPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          To continue, enter your password
        </h1>

        <p className="text-gray-600 mb-8">ni*********i@gmail.com</p>

        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-4 border border-gray-300 rounded-full outline-none focus:border-paypal-blue transition-colors"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button className="text-paypal-blue font-medium text-sm mb-8 self-start">
          More Options
        </button>
      </div>

      <div className="p-6">
        <button
          onClick={onSubmit}
          disabled={!password}
          className="w-full bg-black text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
