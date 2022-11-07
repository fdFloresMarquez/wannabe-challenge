import styles from '../styles/Home.module.css';

import NavBar from './NavBar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container mb-5">{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/fdFloresMarquez"
          rel="github profile noreferrer"
          target="_blank"
        >
          Developed by Flores Marquez Facundo
        </a>
      </footer>
    </>
  );
};

export default Layout;
