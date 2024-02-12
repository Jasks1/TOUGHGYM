import styles from "./About.module.css";
import aboutImage from "/src/assets/images/gym.jpeg";

function About() {
  return(<>
    <div className={styles.aboutSection}>
      <div className={styles.aboutIntro}>
          <h1>About Us</h1>
      </div>

      <div className={styles.aboutGrid}>

          <div className={styles.aboutText}>
            <p>Welcome to Tough Gym, a home of athletes, where champions are forged.
            </p>
            <br />
            <p>
             We are commitment to cultivate a community of dedicated individuals striving for excellence in combat sports such as Brazilian Jiu-Jitsu (BJJ), boxing, and mixed martial arts (MMA) and also people who want to learn self-defense or just want to live a healthier life by becoming fit.
             </p> 
             <br />
             <p>
             Hence, at Tough Gym, we welcome individuals of all levels, whether you're a beginner taking your first steps into the world of combat sports, an amateur honing your skills, or an advanced practitioner seeking to push your limits. Our experienced instructors provide expert guidance and personalized training programs tailored to each individual's goals and abilities. You will be taught by our head coaches and trainers, who are former pro MMA fighters, BJJ fighters and Boxers.
            </p>
            <br />
            <p>
            Join us and become part of the legacy at Tough Gym today.
            </p>
          </div>

          <div className={styles.aboutImgHolder}>
              <img className={styles.aboutImg} src={aboutImage} alt="gym image" />
          </div>
        
      </div>
    </div>
  </>);
}

export default About;
