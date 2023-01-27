import { ContextNumberCount } from '../../types/utils/context-number';
import { useContext } from 'react';
import './styles.css';
import ContextAPI from '../ContextAPI';

export default function Header() {
  const { contextNumberCount, setContextNumberCount } =
    useContext(ContextNumberCount);
  return (
    <>
      <header className="header-dsfilter">
        <nav className="nav-dsfilter container-header container-header-960">
          <h1>DSFilter</h1>
          <ContextAPI />
        </nav>
      </header>
    </>
  );
}
