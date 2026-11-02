import { useState } from 'react';
import { Screen, Transaction, Invoice, InvoiceItem, Tax } from './types';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InvoicesList from './components/InvoicesList';
import CreateInvoice from './components/CreateInvoice';
import AddItem from './components/AddItem';
import AddTax from './components/AddTax';
import MoreOptions from './components/MoreOptions';
import InvoicePreview from './components/InvoicePreview';
import SuccessScreen from './components/SuccessScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');
  const [showProgress, setShowProgress] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([
    {
      id: '1',
      type: 'invoice_sent',
      name: 'John Smith',
      amount: 150.00,
      date: 'Oct 25, 2026',
      status: 'Invoice sent'
    },
    {
      id: '2',
      type: 'request_canceled',
      name: 'Sarah Johnson',
      amount: 75.00,
      date: 'Oct 24, 2026',
      status: 'Request sent - Canceled'
    },
    {
      id: '3',
      type: 'payment',
      name: 'Mike Davis',
      amount: 200.00,
      date: 'Oct 23, 2026',
      status: 'Payment'
    },
    {
      id: '4',
      type: 'money_received',
      name: 'Emily Brown',
      amount: 325.50,
      date: 'Oct 22, 2026',
      status: 'Money received'
    }
  ]);

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'INV-001',
      number: '0001',
      clientName: 'Acme Corp',
      status: 'unpaid',
      date: 'Oct 20, 2026',
      items: [],
      taxes: [],
      subtotal: 0,
      total: 0
    },
    {
      id: 'INV-002',
      number: '0002',
      clientName: 'Tech Solutions',
      status: 'paid',
      date: 'Oct 18, 2026',
      items: [],
      taxes: [],
      subtotal: 0,
      total: 0
    }
  ]);

  const [currentInvoice, setCurrentInvoice] = useState<Invoice>({
    id: '',
    number: '0003',
    clientName: '',
    status: 'unpaid',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    items: [],
    taxes: [],
    subtotal: 0,
    total: 0
  });

  const navigateTo = (screen: Screen) => {
    setShowProgress(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setShowProgress(false);
    }, 500);
  };

  const addItem = (item: InvoiceItem) => {
    setCurrentInvoice(prev => ({
      ...prev,
      items: [...prev.items, item],
      subtotal: prev.subtotal + (item.price * item.quantity),
      total: prev.subtotal + (item.price * item.quantity)
    }));
  };

  const addTax = (tax: Tax) => {
    setCurrentInvoice(prev => ({
      ...prev,
      taxes: [...prev.taxes, tax],
      total: prev.subtotal + (prev.subtotal * (tax.rate / 100))
    }));
  };

  const updateInvoiceOptions = (options: { terms?: string; dueDate?: string; reference?: string }) => {
    setCurrentInvoice(prev => ({
      ...prev,
      ...options
    }));
  };

  const handleSendInvoice = () => {
    const newInvoice = {
      ...currentInvoice,
      id: `INV-${Date.now()}`
    };
    setInvoices(prev => [...prev, newInvoice]);
    setTransactionHistory(prev => [{
      id: Date.now().toString(),
      type: 'invoice_sent',
      name: currentInvoice.clientName || 'Client',
      amount: currentInvoice.total,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Invoice sent'
    }, ...prev]);
    navigateTo('success');
  };

  const resetInvoice = () => {
    setCurrentInvoice({
      id: '',
      number: '0003',
      clientName: '',
      status: 'unpaid',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [],
      taxes: [],
      subtotal: 0,
      total: 0
    });
  };

  return (
    <div className="min-h-screen bg-paypal-bg">
      <Header showProgress={showProgress} />
      
      {currentScreen === 'dashboard' && (
        <Dashboard
          transactions={transactionHistory}
          onCreateInvoice={() => {
            resetInvoice();
            navigateTo('createInvoice');
          }}
          onNavigate={(screen: Screen) => navigateTo(screen)}
        />
      )}

      {currentScreen === 'invoices' && (
        <InvoicesList
          invoices={invoices}
          onBack={() => navigateTo('dashboard')}
          onCreateInvoice={() => {
            resetInvoice();
            navigateTo('createInvoice');
          }}
        />
      )}

      {currentScreen === 'createInvoice' && (
        <CreateInvoice
          invoice={currentInvoice}
          onBack={() => navigateTo('dashboard')}
          onAddItem={() => navigateTo('addItem')}
          onAddTax={() => navigateTo('addTax')}
          onMoreOptions={() => navigateTo('moreOptions')}
          onPreview={() => navigateTo('preview')}
          onDeleteItem={(itemId) => {
            const item = currentInvoice.items.find(i => i.id === itemId);
            if (item) {
              setCurrentInvoice(prev => ({
                ...prev,
                items: prev.items.filter(i => i.id !== itemId),
                subtotal: prev.subtotal - (item.price * item.quantity),
                total: prev.total - (item.price * item.quantity)
              }));
            }
          }}
        />
      )}

      {currentScreen === 'addItem' && (
        <AddItem
          onBack={() => navigateTo('createInvoice')}
          onAddItem={addItem}
        />
      )}

      {currentScreen === 'addTax' && (
        <AddTax
          onBack={() => navigateTo('createInvoice')}
          onAddTax={addTax}
        />
      )}

      {currentScreen === 'moreOptions' && (
        <MoreOptions
          invoice={currentInvoice}
          onBack={() => navigateTo('createInvoice')}
          onSave={updateInvoiceOptions}
        />
      )}

      {currentScreen === 'preview' && (
        <InvoicePreview
          invoice={currentInvoice}
          onBack={() => navigateTo('createInvoice')}
          onSend={handleSendInvoice}
        />
      )}

      {currentScreen === 'success' && (
        <SuccessScreen
          onDone={() => navigateTo('dashboard')}
        />
      )}
    </div>
  );
}

export default App;
