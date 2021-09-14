import styles from './app.module.scss';
import { Ui, Xyz } from '@nx-test/ui';
import { Header } from '@nx-test/header';

export function App() {
  return (
    <div className={styles.app}>
      <h2>Monorepo test</h2>
      <Ui />
      <Xyz />
      <Header />
    </div>
  );
}

export default App;
