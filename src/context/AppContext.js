import { createContext, useState, useEffect } from 'react';
import getRepos from '../http/getRepos';

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (!inputValue) {
      return false;
    }
    getRepos(inputValue)
      .then((data) => setRepos(data))
      .catch((e) => setError(e.message));
  }, [inputValue]);

  return (
    <AppContext.Provider
      value={{ repos, setInputValue, inputValue, loading, setLoading, error }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
