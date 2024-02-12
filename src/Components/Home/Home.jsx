import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import whiteLogo from "/src/assets/images/logoWht.png";

function Home() {
  return(<>

  <div className={styles.heroSection}>
    <div className={styles.heroText}>
      <h1>tough gym</h1>
      <h2>Home of athletes</h2>
      <p>since 2002</p>
      <img src={whiteLogo} alt="logo" className={styles.heroLogoImg} />
      <div className={styles.heroBtnHolder}>
        <Link className={styles.link} to={"contact"}><button className={`${styles.btn} ${styles.joinBtn}`}>Join the gym</button></Link>
        <Link className={styles.link} to={"timetable"}><button className={`${styles.btn} ${styles.timeTableBtn}`}>Timetable</button></Link>
      </div>
    </div>

    <div className={styles.mainInfoGrid}>

    <div className={styles.mainInfoBox}>
        <h1>Combat sports training</h1>
        <p>
          The Combat Sports Training class combines boxing, Brazilian Jiu-Jitsu (BJJ), and mixed martial arts (MMA) into a dynamic and intensive workout experience. Led by expert instructors, participants learn striking techniques from boxing, ground grappling from BJJ, and the integration of various martial arts disciplines in MMA.</p>
      </div>

      <div className={styles.mainInfoBox}>
        <h1>beginner to professional</h1>
        <p>This class is designed to guide individuals through every stage of their fitness journey, from novice to expert. Led by experienced trainers, this class offers a structured program tailored to each participant's skill level and goals. From mastering basic movements to refining advanced techniques, this class equips individuals with the tools and knowledge to succeed, no matter where they are on their fitness path.
        </p>
      </div>

      <div className={styles.mainInfoBox}>
        <h1>Sparring</h1>
        <p>In the Sparring class at our Gym, participants engage in controlled combat simulations under expert supervision. Tailored for those with prior experience in combat sports, this class offers a dynamic environment to refine techniques, timing, and strategy through supervised sparring sessions.</p>
      </div>

      <div className={styles.mainInfoBox}>
        <h1>Personal coaching</h1>
        <p>Our professional coaches offer personalized training to help you reach your fitness goals. With customized workouts and expert guidance, we're dedicated to maximizing your results and empowering you to achieve success efficiently. 
        </p>
      </div>

      <div className={styles.mainInfoBox}>
        <h1>Our equipment</h1>
        <p>Tough Gym is equipped with state-of-the-art facilities, featuring a wide range of high-quality equipment tailored for all fitness levels. From cardio machines to free weights and functional training tools.
        <br />
        We also have all the combat sports training equipment including heavy bags, grappling dummies, and sparring equipment to maximize your potential.</p>
      </div>

      <div className={styles.mainInfoBox}>
        <h1>Fitness</h1>
        <p>Our fitness classes are led by specialized trainers who provide expert guidance, motivation, and personalized instruction, ensuring each participant receives the support they need to achieve their fitness goals.
        </p>
      </div>

    </div>
    
  </div>
  </>);
}

export default Home;
