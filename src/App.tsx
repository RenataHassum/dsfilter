import CardFilter from './components/CardFilter';
import CardListing from './components/CardListing';

import Header from './components/Header';

export default function App() {
  return (
    <>
        <Header />
      <main className="container-body-960">
        <CardFilter />
        <CardListing />
      </main>
    </>
  );
}
