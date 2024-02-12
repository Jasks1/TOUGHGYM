import styles from "./Team.module.css";
import teamImg from "/src/assets/images/avatar.png";

function Team() {
  return(<>
    <div className={styles.teamSection}>
    <div className={styles.teamIntro}>
      <h1>Our Team</h1>
    </div>

    <div className={styles.teamGrid}>

    <div className={styles.teamBox}>
        <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Martin grace</h2>
          <p>Headcoach BJJ</p>
        </div>
      </div>

      <div className={styles.teamBox}>
        <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Steve Loman</h2>
          <p>Headcoah MMA</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>José vaso</h2>
          <p>Headcoah Boxing</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Sydney Jockel</h2>
          <p>trainer Fitness</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Hamnet Ioan</h2>
          <p>Trainer Boxing</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Nuwan Dariel</h2>
          <p>Trainer Kickboxing</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Kyrie Usha</h2>
          <p>Trainer BJJ</p>
        </div>
      </div>

      <div className={styles.teamBox}>
         <img className={styles.teamImg} src={teamImg} alt="team picture" />
        <div className={styles.teamInfo}>
          <h2>Steinun Naime</h2>
          <p>Event management</p>
        </div>
      </div>

    </div>
  </div>
  </>);
}

export default Team;
