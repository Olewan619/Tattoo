"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Main
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
          >
            About the Master
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={pathname === "/portfolio" ? styles.active : ""}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
