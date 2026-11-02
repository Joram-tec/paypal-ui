import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  showProgress: boolean;
}

export default function Header({ showProgress }: HeaderProps) {
  return (
    <>
      <header className="bg-paypal-dark text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <button className="p-2 hover:bg-paypal-blue rounded-full transition-colors">
          <Menu size={24} />
        </button>
        
        <div className="flex items-center">
          <img
            src="/paypal-ui/paypal-logo.svg"
            alt="PayPal"
            className="h-8"
          />
        </div>
        
        <button className="p-2 hover:bg-paypal-blue rounded-full transition-colors relative">
          <Bell size={24} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>
      
      {showProgress && (
        <div className="h-1 bg-paypal-dark overflow-hidden">
          <div className="h-full bg-paypal-blue progress-bar"></div>
        </div>
      )}
    </>
  );
}
