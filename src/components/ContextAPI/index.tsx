import { ContextNumberCount } from '../../types/utils/context-number';
import { useContext } from 'react';
import './styles.css';

export default function ContextAPI() {
  const { contextNumberCount, setContextNumberCount } =
    useContext(ContextNumberCount);
  return (
    <>
      <p>{contextNumberCount} produtos(s)</p>
    </>
  );
}
