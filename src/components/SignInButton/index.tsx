import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInBtutton() {
  const isUserLoggedIn = true;


  return isUserLoggedIn ? (
    <button 
    type="button"
    className={styles.signInButton}
  >
    <FaGithub color="#04d361" />
    Adoilson Freitas
    <FiX color="#737380" className={styles.closeIcon} />
  </button>
  ) : (
    <button 
    type="button"
    className={styles.signInButton}
  >
    <FaGithub color="#D69E2E" />
    Sign in with Github
  </button>
  );
}