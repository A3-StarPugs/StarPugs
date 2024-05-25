"use client";
import Logo from "@/ui/Logo";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.scss";

const links = [
  { url: "/", text: "Home" },
  { url: "/cardapio", text: "Cardápio" },
  { url: "/shop", text: "Shop" },
  { url: "/login", text: "Login" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url}>{link.text}</Link>
    </li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);

  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(0, 3)}</ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="favoritos">
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link href="carrinho">
                <FiShoppingCart />
              </Link>
            </li>
            {renderLinks.slice(3, 4)}
          </ul>
        </nav>
      </div>

      <div className={`${styles.mobile} ${isMobile ? styles.active : ""}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <GiHamburgerMenu onClick={toggleIsMobile} className={styles.burguer} />
        <nav className={styles["mobile-navigation"]}>
          <AiOutlineClose onClick={toggleIsMobile} className={styles.close} />
          <ul>{renderLinks}</ul>
        </nav>
      </div>
    </section>
  );
}
