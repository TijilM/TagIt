import React from "react";
import styles from "../Styles/navbar.module.css"
function Navbar() {
  return (
    <nav>
      <div className={styles.navbarContainer}>
        <div className={styles.navMenu}>
          <div>
            <a className={styles.navLinks} href="#about">
              About Us
            </a>
          </div>
          <div>
            <a className={styles.navLinks} href="#contact">
              Contact Us
            </a>
          </div>
          <div>
            <a className={styles.navLinks} href="#faq">
              FAQs
            </a>
          </div>
          <div>
            <a className={styles.navLinks} href="/supplier">
              Become a Supplier
            </a>
          </div>
          {/* <div>
            <a className={styles.navLinks} href="/mainpage">
              DashBoard
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;