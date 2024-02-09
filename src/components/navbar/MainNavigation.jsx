import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";
import styles from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header>
      <main className={styles.main}>
        <NavbarLeft />
        <NavbarRight />
      </main>
    </header>
  );
}
