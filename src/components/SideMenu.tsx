import { Home, Send, Wallet, Activity, HelpCircle, LogOut, X } from 'lucide-react';
import { Screen } from '../types';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

export default function SideMenu({ isOpen, onClose, onNavigate, onLogout }: SideMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { icon: Home, label: 'Home', screen: 'dashboard' as Screen },
    { icon: Send, label: 'Send and Request', screen: 'sendRequest' as Screen },
    { icon: Wallet, label: 'Wallet', screen: 'wallet' as Screen },
    { icon: Activity, label: 'Activity', screen: 'invoices' as Screen },
    { icon: HelpCircle, label: 'Help', screen: 'help' as Screen },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
              <img
                src="/images/girl-avatar.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Nicole</p>
              <p className="text-sm text-gray-500">ni*********i@gmail.com</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="py-4">
          {menuItems.map((item) => (
            <button
              key={item.screen}
              onClick={() => {
                onNavigate(item.screen);
                onClose();
              }}
              className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
            >
              <item.icon size={24} className="text-gray-600" />
              <span className="text-gray-900 font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <button
            onClick={onLogout}
            className="w-full px-6 py-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
          >
            <LogOut size={24} className="text-gray-600" />
            <span className="text-gray-900 font-medium">LOG OUT</span>
          </button>
        </div>
      </div>
    </>
  );
}
