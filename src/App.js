import Header from './comoponents/Header';
import { AppContextProvider } from './context/AppContext';
import Routes from './Routes';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Routes />
    </AppContextProvider>
  );
}

export default App;
