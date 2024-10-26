import styles from "./assets/css/message.module.css";

const Message = () => {
  return (
    <div className={styles.message}>
      <section className={styles.navigation}>
        <div className={styles.shadow} />
        <footer className={styles.navigationChild} />
        <img
          className={styles.navigationItem}
          alt=""
          src="/menuindicator@2x.png"
        />
        <div className={styles.link}>
          <img className={styles.homeIcon} alt="" src="/home@2x.png" />
          <div className={styles.home}>Home</div>
        </div>
        <img className={styles.linkIcon} alt="" src="/link1@2x.png" />
        <div className={styles.link1}>
          <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
          <div className={styles.home}>Profile</div>
        </div>
        <div className={styles.link2}>
          <img className={styles.settingIcon} alt="" src="/setting1@2x.png" />
          <div className={styles.home}>Setting</div>
        </div>
      </section>
      <div className={styles.header}>
        <div className={styles.message1}>Message</div>
        <img className={styles.linkIcon1} alt="" src="/chevronleft@2x.png" />
        <img className={styles.linkIcon2} alt="" src="/link2@2x.png" />
      </div>
      <div className={styles.div}>
        <div className={styles.rozanneBarrientes}>Rozanne Barrientes</div>
        <div className={styles.theNewLean}>
          A wonderful serenity has taken...
        </div>
        <div className={styles.notification}>
          <div className={styles.notificationChild} />
          <div className={styles.div1}>2</div>
        </div>
        <img className={styles.avatarIcon} alt="" src="/avatar6@2x.png" />
      </div>
      <div className={styles.div2}>
        <div className={styles.rozanneBarrientes}>Anaya Sanji</div>
        <div className={styles.theNewLean}>What about Paypal?</div>
        <div className={styles.notification}>
          <div className={styles.notificationChild} />
          <div className={styles.div1}>1</div>
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar7@2x.png" />
      </div>
      <div className={styles.div4}>
        <div className={styles.rozanneBarrientes2}>Elizabeth Olsen</div>
        <div className={styles.theNewLean2}>
          We shoud move forword to talk with....
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar4@2x.png" />
      </div>
      <div className={styles.div5}>
        <div className={styles.rozanneBarrientes3}>Tony Stark</div>
        <div className={styles.theNewLean3}>
          Let’s have a call for a future projects...
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar8@2x.png" />
      </div>
      <div className={styles.div6}>
        <div className={styles.rozanneBarrientes4}>Banner</div>
        <div className={styles.theNewLean4}>
          I don’t think i can fit on this ui we should....
        </div>
        <div className={styles.avatar} />
        <div className={styles.b}>B</div>
      </div>
      <div className={styles.div7}>
        <div className={styles.rozanneBarrientes5}>Steave</div>
        <div className={styles.theNewLean5}>
          Move in some special work recently so.....
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar3@2x.png" />
      </div>
      <div className={styles.div8}>
        <div className={styles.rozanneBarrientes6}>Thor</div>
        <div className={styles.theNewLean6}>
          You shoud be a avenger i thing the.....
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar@2x.png" />
      </div>
      <div className={styles.div9}>
        <div className={styles.rozanneBarrientes7}>Natasha</div>
        <div className={styles.theNewLean7}>
          I am going to die in avengers endgame.....
        </div>
        <div className={styles.avatar1} />
        <div className={styles.n}>N</div>
      </div>
      <div className={styles.div10}>
        <div className={styles.rozanneBarrientes8}>Hak Eye</div>
        <div className={styles.theNewLean8}>
          I have to save natasha in endgame.....
        </div>
        <div className={styles.avatar2} />
        <div className={styles.n}>H</div>
      </div>
      <img className={styles.buttonIcon} alt="" src="/button9@2x.png" />
    </div>
  );
};

export default Message;
