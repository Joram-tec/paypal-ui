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
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5 4H25.5C25.2 4 25 4.2 24.9 4.5L22.5 20.5C22.5 20.7 22.6 20.8 22.8 20.8H25.3C25.5 20.8 25.7 20.6 25.8 20.4L26.3 17.2C26.4 16.9 26.6 16.7 26.9 16.7H28.5C31.8 16.7 33.7 15.1 34.2 11.9C34.4 10.5 34.2 9.3 33.5 8.5C32.7 7.6 31.4 7.1 29.5 7.1L30.5 4ZM27.2 12.1C27 13.3 26.2 14.1 25 14.1H24L24.5 10.8C24.5 10.6 24.7 10.5 24.9 10.5H25.3C26.6 10.5 27.3 10.8 27.2 12.1Z"
              fill="white"
            />
            <path
              d="M46.5 4H41.5C41.2 4 41 4.2 40.9 4.5L38.5 20.5C38.5 20.7 38.6 20.8 38.8 20.8H41.3C41.5 20.8 41.7 20.6 41.8 20.4L42.3 17.2C42.4 16.9 42.6 16.7 42.9 16.7H44.5C47.8 16.7 49.7 15.1 50.2 11.9C50.4 10.5 50.2 9.3 49.5 8.5C48.7 7.6 47.4 7.1 45.5 7.1L46.5 4ZM43.2 12.1C43 13.3 42.2 14.1 41 14.1H40L40.5 10.8C40.5 10.6 40.7 10.5 40.9 10.5H41.3C42.6 10.5 43.3 10.8 43.2 12.1Z"
              fill="white"
            />
            <path
              d="M62.5 4H57.5C57.2 4 57 4.2 56.9 4.5L54.5 20.5C54.5 20.7 54.6 20.8 54.8 20.8H57.3C57.5 20.8 57.7 20.6 57.8 20.4L58.3 17.2C58.4 16.9 58.6 16.7 58.9 16.7H60.5C63.8 16.7 65.7 15.1 66.2 11.9C66.4 10.5 66.2 9.3 65.5 8.5C64.7 7.6 63.4 7.1 61.5 7.1L62.5 4ZM59.2 12.1C59 13.3 58.2 14.1 57 14.1H56L56.5 10.8C56.5 10.6 56.7 10.5 56.9 10.5H57.3C58.6 10.5 59.3 10.8 59.2 12.1Z"
              fill="white"
            />
            <path
              d="M78.5 4H73.5C73.2 4 73 4.2 72.9 4.5L70.5 20.5C70.5 20.7 70.6 20.8 70.8 20.8H73.3C73.5 20.8 73.7 20.6 73.8 20.4L74.3 17.2C74.4 16.9 74.6 16.7 74.9 16.7H76.5C79.8 16.7 81.7 15.1 82.2 11.9C82.4 10.5 82.2 9.3 81.5 8.5C80.7 7.6 79.4 7.1 77.5 7.1L78.5 4ZM75.2 12.1C75 13.3 74.2 14.1 73 14.1H72L72.5 10.8C72.5 10.6 72.7 10.5 72.9 10.5H73.3C74.6 10.5 75.3 10.8 75.2 12.1Z"
              fill="white"
            />
            <path
              d="M94.5 4H89.5C89.2 4 89 4.2 88.9 4.5L86.5 20.5C86.5 20.7 86.6 20.8 86.8 20.8H89.3C89.5 20.8 89.7 20.6 89.8 20.4L90.3 17.2C90.4 16.9 90.6 16.7 90.9 16.7H92.5C95.8 16.7 97.7 15.1 98.2 11.9C98.4 10.5 98.2 9.3 97.5 8.5C96.7 7.6 95.4 7.1 93.5 7.1L94.5 4ZM91.2 12.1C91 13.3 90.2 14.1 89 14.1H88L88.5 10.8C88.5 10.6 88.7 10.5 88.9 10.5H89.3C90.6 10.5 91.3 10.8 91.2 12.1Z"
              fill="white"
            />
          </svg>
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
