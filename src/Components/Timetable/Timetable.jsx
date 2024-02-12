import { useState } from "react";
import styles from "./Timetable.module.css";

function Timetable() {

  let [mon, setMonday] = useState(false);
  let [tue, setTueday] = useState(false);
  let [wed, setWednesday] = useState(false);
  let [thu, setThursday] = useState(false);
  let [fri, setFriday] = useState(false);
  let [sat, setSaturday] = useState(false);
  let [sun, setSunday] = useState(false);

  return(<>
  <div className={styles.timetableSection}>

    <div className={styles.timetableIntro}>
      <h1>Our timetable</h1>
      <p>Please check our socials to be informed about any temporary changes in the schedule.</p>
    </div>

    <div className={styles.timetable}>

      <a onClick={()=>setMonday(m => !m)} className={`${styles.weekDayText}`}>Monday</a>

      {mon ? <div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>

            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>Boxing 8:00 - 10:00 </b>
            <ul>
              <li><b>Level:</b> All Levels</li>
              <li><b>Trainer:</b> Hamnet Ioan</li>
            </ul>
            </li>
            <li><b>BJJ 10:30 - 12:00</b>  
            <ul>
              <li><b>Level:</b> All Levels</li>
              <li><b>Trainer:</b> Kyrie Usha</li>
            </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>Group training 12:30 - 14:00</b>  
            <ul>
              <li><b>Level:</b> All Levels</li>
              <li><b>Trainer:</b> Steve Loman</li>
            </ul>
            </li>
            <li><b>Personal coaching 14:30 - 16:00</b>  
              <ul>
                <li><b>Level:</b> Beginner</li>
                <li><b>Trainer:</b> José Vaso</li>
              </ul>
            </li>
            <li><b>Fitness 16:30 - 18:00</b>  
              <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Sydney Jockel</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-moon-fill`}></i></li>
            <li><b>Boxing 18:30 - 20:30</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> José Vaso</li>
              </ul>
            </li>
            <li><b>Sparring 20:30 - 22:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> José Vaso</li>
              </ul>
           </li>
          </ul>
        </div>

      </div>:null}

      <hr className={styles.line} />

      <a onClick={()=>setTueday(t => !t)} className={`${styles.weekDayText}`}>Tuesday</a>

      {tue?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>BJJ 8:00 - 10:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Kyrie Usha</li>
              </ul>
            </li>
            <li><b>Kick boxing 10:30 - 12:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Nuwan Dariel</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>MMA 12:30 - 14:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Steve Loman</li>
              </ul>
            </li>
            <li><b>Group training 14:30 - 16:00</b>  
            <ul>
                <li><b>Level:</b> Amateur</li>
                <li><b>Trainer:</b> Martin Grace</li>
              </ul>
           </li>
            <li><b>Fitness 16:30 - 18:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Sydney Jockel</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-moon-fill`}></i></li>
            <li><b>BJJ 18:30 - 20:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> Martin Grace</li>
              </ul>
            </li>
            <li><b>Sparring 21:00 - 22:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> Martin Grace</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>:null}

      <hr className={styles.line} />

      <a onClick={()=>setWednesday(w => !w)} className={`${styles.weekDayText}`}>Wednesday</a>

      {wed?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul  className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>MMA 8:00 - 10:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b>  Martin Grace</li>
              </ul>
            </li>
            <li><b>BJJ 10:30 - 12:00 </b> 
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b>  Kyrie Usha</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>Fitness 12:30 - 14:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Sydney Jockel</li>
              </ul>
            </li>
            <li><b>MMA 14:30 - 16:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Steve Loman</li>
              </ul>
            </li>
            <li><b>Group training 16:30 - 18:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Hamnet Ioan</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-moon-fill`}></i></li>
            <li><b>Boxing 18:30 - 20:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b>  José Vaso</li>
              </ul>
            </li>
            <li><b>Sparring 21:00 - 22:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b>  José Vaso</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>: null}

      <hr className={styles.line} />
      <a onClick={()=>setThursday(t=>!t)} className={`${styles.weekDayText}`}>Thursday</a>

      {thu?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul  className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>Boxing 8:00 - 10:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Hamnet Ioan</li>
              </ul>
            </li>
            <li><b>Kick Boxing 10:30 - 12:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Nuwan Dariel</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>BJJ 12:30 - 14:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Kyrie Usha</li>
              </ul>
            </li>
            <li><b>Group training 14:30 - 16:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Steve Loman</li>
              </ul>
            </li>
            <li><b>Fitness 16:30 - 18:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Martin Grace</li>
              </ul>
           </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-moon-fill`}></i></li>
            <li><b>MMA 18:30 - 20:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> Steve Loman</li>
              </ul>
            </li>
            <li><b>Sparring 21:00 - 22:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b> Steve Loman</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>: null}
      
      <hr className={styles.line} />

      <a onClick={()=>setFriday(f=>!f)} className={`${styles.weekDayText}`}>Friday</a>

      {fri?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>Boxing 8:00 - 10:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Hamnet Ioan</li>
              </ul>
            </li>
            <li><b>BJJ 10:30 - 12:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Kyrie Usha</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>Personal coaching 12:30 - 14:00</b>  
            <ul>
                <li><b>Level:</b> Beginner</li>
                <li><b>Trainer:</b> José Vaso</li>
              </ul>
            </li>
            <li><b>Fitness 14:30 - 16:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Sydney Jockel</li>
              </ul>
            </li>
            <li><b>Group training 16:30 - 18:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b>Steve Loman</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-moon-fill`}></i></li>
            <li><b>Boxing 18:30 - 20:30</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b>  José Vaso</li>
              </ul>
           </li>
            <li><b>Sparring 20:30 - 22:00</b>  
            <ul>
                <li><b>Level:</b> Advanced</li>
                <li><b>Trainer:</b>  José Vaso</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>: null}

      <hr className={styles.line} />
      <a onClick={()=>setSaturday(s=>!s)} className={`${styles.weekDayText}`}>Saturday</a>


      {sat?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={` ${styles.timeIndicationIcon} bi bi-brightness-alt-high-fill`}></i></li>
            <li><b>BJJ 8:00 - 10:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Kyrie Usha</li>
              </ul>
            </li>
            <li><b>Fitness 10:30 - 12:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Sydney Jockel</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li><i className={`${styles.timeIndicationIcon} bi bi-brightness-high-fill`}></i></li>
            <li><b>Group training 12:30 - 14:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Hamnet Ioan</li>
              </ul>
           </li>
            <li><b>Personal Coaching 14:30 - 16:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> José Vaso</li>
              </ul>
            </li>
            <li><b>Kick Boxing 16:30 - 18:00</b>  
            <ul>
                <li><b>Level:</b> All Levels</li>
                <li><b>Trainer:</b> Nuwan Dariel</li>
              </ul>
            </li>
          </ul>
        </div>

      </div>: null}
      

      <hr className={styles.line} />
      <a onClick={()=>setSunday(s=>!s)} className={`${styles.weekDayText}`}>Sunday</a>

      {sun?<div className={styles.timetableGrid}>

        <div className={styles.timetableInfoHolder}>
          <ul className={styles.timetableLists}>
            <li> Closed</li>
          </ul>
        </div>

      </div>: null}

    </div>

  </div>
  </>);
}

export default Timetable;