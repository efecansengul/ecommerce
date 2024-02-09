import { Link } from "react-router-dom";
import styles from "./NavbarLeft.module.css";
export default function NavbarLeft() {
  return (
    <Link href="/" className={styles.container}>
      Shoptify
    </Link>
  );
}
