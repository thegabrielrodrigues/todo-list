import Logo from '@/assets/logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header_container}>
      <img src={Logo} />
    </header>
  );
}
