import Header from './components/Header';
import ListingBody from './components/ListingBody';
import { useState } from 'react';
import { ContextNumberCount } from './types/utils/context-number';

export default function App() {
  const [contextNumberCount, setContextNumberCount] = useState<number>(0);

  return (
    <ContextNumberCount.Provider
      value={{ contextNumberCount, setContextNumberCount }}
    >
      <Header />
      <ListingBody />
    </ContextNumberCount.Provider>
  );
}
