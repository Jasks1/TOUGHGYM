import styles from "./Classes.module.css";

function Classes() {
  return(<>
  <div className={styles.classesSection}>
    <div className={styles.classesIntro}>
      <h1>Our classes</h1>
      <p>Our main priority is to train people based on their current levels, whether they are beginners, amateurs, or advanced, and to unlock their full potential.</p>
    </div>

    <div className={styles.classesGrid}>

    <div className={styles.classBox}>
        <h1>Combat sports training</h1>
        <p>The Combat Sports Training class combines boxing, Brazilian Jiu-Jitsu (BJJ), and mixed martial arts (MMA) into a dynamic and intensive workout experience. Led by expert instructors, participants learn striking techniques from boxing, ground grappling from BJJ, and the integration of various martial arts disciplines in MMA.</p>
      </div>

      <div className={styles.classBox}>
        <h1>beginner to professional</h1>
        <p>This class is designed to guide individuals through every stage of their fitness journey, from novice to expert. Led by experienced trainers, this class offers a structured program tailored to each participant's skill level and goals. From mastering basic movements to refining advanced techniques, this class equips individuals with the tools and knowledge to succeed, no matter where they are on their fitness path.
        </p>
      </div>

      <div className={styles.classBox}>
        <h1>Sparring</h1>
        <p>In the Sparring class at our Gym, participants engage in controlled combat simulations under expert supervision. Tailored for those with prior experience in combat sports, this class offers a dynamic environment to refine techniques, timing, and strategy through supervised sparring sessions.
        <br />
        Safety is paramount, with instructors ensuring adherence to proper protocols and protective gear use. The Sparring class provides a platform to test abilities and grow as a martial artist in a supportive setting.
        </p>
      </div>

      <div className={styles.classBox}>
        <h1>Personal coaching</h1>
        <p>Our professional coaches offer personalized training to help you reach your fitness goals. With customized workouts and expert guidance, we're dedicated to maximizing your results and empowering you to achieve success efficiently. 
        </p>
      </div>

      <div className={styles.classBox}>
        <h1>Group training</h1>
        <p>Led by our head coaches, Tough Gym's group training sessions offer expert guidance, personalized instruction, and a motivating atmosphere, ensuring participants receive top-notch support to achieve their fitness goals effectively and efficiently.</p>
      </div>

      <div className={styles.classBox}>
        <h1>Fitness</h1>
        <p>Our fitness classes are led by specialized trainers who provide expert guidance, motivation, and personalized instruction, ensuring each participant receives the support they need to achieve their fitness goals.
        </p>
      </div>

    </div>
  </div>
  </>);
}

export default Classes;
