// Navigation
import { RoutesProvider } from './navigation';
// Providers
import { AppProviders } from './providers';
// Components
import { Header } from './components';

const App: React.FC = () => {
  return (
    <AppProviders>
      <Header />
      <RoutesProvider />
    </AppProviders>
  );
};

export default App;
