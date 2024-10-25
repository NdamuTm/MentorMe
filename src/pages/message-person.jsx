import styles from "./message-person.module.css";

const MessagePerson = () => {
  return (
    <div className={styles.messagePerson}>
      <div className={styles.header}>
        <button className={styles.link}>
          <img
            className={styles.chevronLeftIcon}
            alt=""
            src="/chevronleft@2x.png"
          />
        </button>
        <img className={styles.avatarIcon} alt="" src="/avatar5@2x.png" />
        <div className={styles.rozanneBarrientes}>Anaya Sanji</div>
        <img className={styles.buttonIcon} alt="" src="/button7.svg" />
      </div>
      <section className={styles.message}>
        <div className={styles.myMessage}>
          <div className={styles.div}>
            <img
              className={styles.rectangleCopyIcon}
              alt=""
              src="/rectangle-copy.svg"
            />
            <div className={styles.hello}>Hello</div>
            <div className={styles.pm}>4:34 PM</div>
          </div>
          <div className={styles.div1}>
            <img
              className={styles.rectangleCopyIcon}
              alt=""
              src="/rectangle-copy-5.svg"
            />
            <div className={styles.howAreYou}>How are you?😜</div>
            <div className={styles.pm1}>4:35 PM</div>
          </div>
          <div className={styles.div2}>
            <img
              className={styles.rectangleCopyIcon}
              alt=""
              src="/rectangle-copy-7.svg"
            />
            <div className={styles.okay}>
              I heard u guys launching new product?
            </div>
            <div className={styles.pmCopy}>4:35 PM</div>
          </div>
          <div className={styles.div3}>
            <img
              className={styles.rectangleCopy71}
              alt=""
              src="/rectangle-copy-71@2x.png"
            />
            <div className={styles.pmCopy3}>4:34 PM</div>
            <div className={styles.okay1}>Thats Awesome 😍</div>
          </div>
          <div className={styles.div4}>
            <img
              className={styles.rectangleCopy4}
              alt=""
              src="/rectangle-copy-4.svg"
            />
            <div className={styles.didYouSee}>Yes, It calls UiHunt</div>
            <div className={styles.pmCopy2}>4:34 PM</div>
          </div>
          <div className={styles.div5}>
            <img
              className={styles.rectangleCopy4}
              alt=""
              src="/rectangle-copy-3.svg"
            />
            <div className={styles.hello}>Hi</div>
            <div className={styles.pmCopy1}>4:34 PM</div>
          </div>
          <div className={styles.div6}>
            <img
              className={styles.rectangleCopy4}
              alt=""
              src="/rectangle-copy-6.svg"
            />
            <div className={styles.niceBro}>Nice, bro🤟</div>
            <div className={styles.pmCopy31}>4:34 PM</div>
          </div>
        </div>
      </section>
      <button className={styles.button}>
        <div className={styles.rectangle} />
        <img className={styles.plusIcon} alt="" src="/plus-icon@2x.png" />
      </button>
      <div className={styles.input}>
        <div className={styles.myMessage}>
          <div className={styles.textMessagesInput} />
          <div className={styles.text}>Type a message</div>
        </div>
        <img className={styles.buttonIcon1} alt="" src="/button8@2x.png" />
      </div>
    </div>
  );
};

export default MessagePerson;
