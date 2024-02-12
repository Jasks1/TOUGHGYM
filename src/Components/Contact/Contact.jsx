import styles from "./Contact.module.css";

function Contact() {
  return(<>
  <div className={styles.contactSection}>

  <div className={styles.contactIntro}>
          <h1>Contact Us</h1>
      </div>

    <div className={styles.mapGrid}>
      <div className={styles.addressInfo}>
        <p><span><i className={`fa-solid fa-location-dot`}></i> Location: </span>15 street, 1010 Vienna</p>
        <p><span><i className={`fa-solid fa-envelope`}></i> E-mail: </span>office@mail.com</p>
        <p><span><i className={`fa-solid fa-phone`}></i> Tel.: </span>012 345 6789</p>
      </div>

      <div className={styles.mapContainer}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108492.15724959131!2d16.281967432400723!3d48.19521900506413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sWien!5e0!3m2!1sde!2sat!4v1707443660062!5m2!1sde!2sat"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
  </div>
  </>);
}

export default Contact;
