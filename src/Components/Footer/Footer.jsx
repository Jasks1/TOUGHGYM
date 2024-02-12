import styles from "./Footer.module.css"

function Footer() {
  
  return(<>
      <footer>
        <div className={styles.footerGrid}>

        <div className={styles.socials}>
            <h2 className={styles.footerHeadings}>opening hours</h2>
              <ul className={styles.openingHours}>
                <li><span>Mon:</span> 8:00 - 22:00</li>
                <li><span>Tue:</span> 8:00 - 22:00</li>
                <li><span>Wed:</span> 8:00 - 22:00</li>
                <li><span>Thu:</span> 8:00 - 22:00</li>
                <li><span>Fri:</span> 8:00 - 22:00</li>
                <li><span>Sat:</span> 8:00 - 18:00</li>
                <li><span>Sun:</span> closed</li>
              </ul>
          </div>

          <div className={styles.socials}>
            <h2 className={styles.footerHeadings}>our Socials</h2>
              <ul>
                <li><a href="#"><i className={`fa-brands fa-instagram`}></i></a></li>
                <li><a href="#"><i className={`fa-brands fa-x-twitter`}></i></a></li>
                <li><a href="#"><i className={`fa-brands fa-youtube`}></i></a></li>
                <li><a href="#"><i className={`fa-brands fa-facebook`}></i></a></li>
              </ul>
          </div>

        </div>

        <hr className={styles.line}/>

        <div className={styles.footerGrid}>
          <div>
              <h2 className={styles.footerHeadings}>Contact</h2>
                <ul className={styles.contacts}>
                  <li><span><b><i className={`fa-solid fa-envelope`}></i> E-mail: </b></span>office@mail.com</li>
                  <li><span><b><i className={`fa-solid fa-phone`}></i> Tel.: </b></span>012 345 6789</li>
                </ul>
          </div>

          <div>
              <h2 className={styles.footerHeadings}>Privacy</h2>
                <ul className={styles.privacy}>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
          </div>

        </div>

        <hr className={styles.line}/>
        
        <p className={styles.copyRight}>&copy; 2024 &nbsp;<a href="https://jaskaran.codefactory.wien/" target="_blank">Jaskaran Singh</a></p>

      </footer>
    </>
  );
}

export default Footer;

