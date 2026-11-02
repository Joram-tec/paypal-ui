import { ChevronLeft, Edit2 } from 'lucide-react';

interface LoginWelcomeProps {
  onContinue: () => void;
}

export default function LoginWelcome({ onContinue }: LoginWelcomeProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="p-4">
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-gray-100">
          <img
            src="/images/girl-avatar.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Welcome back, Nicole!
        </h1>

        <div className="flex items-center space-x-2 mt-4">
          <span className="text-gray-600">ni*********i@gmail.com</span>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Edit2 size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={onContinue}
          className="w-full bg-black text-white font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
