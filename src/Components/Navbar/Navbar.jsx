import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
import React, {useRef} from "react";
import whiteLogo from "/src/assets/images/logoWht.png";
import openMenuIcon from "/src/assets/images/openMenuIconWht.png";
import closeMenuIcon from "/src/assets/images/closeMenuIconPink.png";

function Navbar() {

  let menuRef = useRef();

  let openMenuRef = useRef();
  let closeMenuRef = useRef();

  function toggleMenu(e) {
    menuRef.current.classList.toggle(styles.showMenu);
    if (menuRef.current.classList.contains(styles.showMenu)) {
      openMenuRef.current.style.display = "none";
      closeMenuRef.current.style.display = "block";
      document.body.style.overflowY = "hidden";
      window.scrollTo(0, 0);
    }
    else{
      openMenuRef.current.style.display = "block";
      closeMenuRef.current.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }
  
  return(<>
    <div className={styles.navbar}>
      <div className={styles.imgHolder}>
        <Link to="/"><img className={styles.logoImg} src={whiteLogo} alt="Logo" /></Link>
      </div>
      <ul className={styles.navLinks} ref={menuRef}>
      <li onClick={toggleMenu} className={styles.navLink}><Link to="/">Home</Link></li>
        <li onClick={toggleMenu} className={styles.navLink}><Link to="/Classes">Classes</Link></li>
        <li onClick={toggleMenu} className={styles.navLink}><Link to="/timetable">Timetable</Link></li>
        <li onClick={toggleMenu} className={styles.navLink}><Link to="/team">Team</Link></li>
        <li onClick={toggleMenu} className={styles.navLink}><Link to="/about">About</Link></li>
        <li onClick={toggleMenu} className={styles.navLink}><Link to="/contact">Contact</Link></li>
      </ul>
      <button onClick={(e)=> toggleMenu(e)} className={styles.hamburger}>
      <img ref={openMenuRef} className={styles.openMenu} src={openMenuIcon} alt="Open Menu" />
      <img ref={closeMenuRef} className={styles.closeMenu} src={closeMenuIcon} alt="Close Menu" />

      </button>
    </div>
    </>
  );
}

export default Navbar;

