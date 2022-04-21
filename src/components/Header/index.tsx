import { SignInBtutton } from "../SignInButton";

import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ignews" />
        <nav>
          <ActiveLink acttveClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink acttveClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInBtutton />
      </div>
    </header>
  );
}
