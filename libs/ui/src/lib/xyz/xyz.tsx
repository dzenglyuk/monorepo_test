import './xyz.module.scss';
import { Header } from '@nx-test/header';

/* eslint-disable-next-line */
export interface XyzProps {}

export function Xyz(props: XyzProps) {
  return (
    <div>
      <h1>Welcome to xyz!</h1>
    </div>
  );
}

export default Xyz;
