import styles from "./assets/css/message.module.css";


const UserCard =({ name, avatar,messagecontent }) => (
  <div className={styles.div}>
   <img className={styles.avatarIcon} alt="" src={avatar} />
    <div className={styles.messageContent}>
    <div className={styles.h1}>{name}</div>
    <div className={styles.p}>
      {messagecontent}
    </div>
    </div>
    <div className={styles.notification}>
      2
    </div>
  </div>
);

function nam(name,email,hahuc){
  console.log(name,email,hahuc)
}





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
        <img className={styles.linkIcon1} alt="" src="/chevronleft.svg" />
        <img className={styles.linkIcon2} alt="" src="/link2@2x.png" />
      </div>


      <div className={styles.div}>

      <img className={styles.avatarIcon} alt="" src="/avatar6@2x.png" />
        <div className={styles.messageContent}>
        <div className={styles.h1}>Rozanne Barrientes</div>
        <div className={styles.p}>
          A wonderful serenity has taken...
        </div>
        </div>
        <div className={styles.notification}>
          2
        </div>
        
      </div>
      <div className={styles.div}>

      <img className={styles.avatarIcon} alt="" src="/avatar6@2x.png" />
        <div className={styles.messageContent}>
        <div className={styles.h1}>Roztes</div>
        <div className={styles.p}>
          A wo
        </div>
        </div>
        <div className={styles.notification}>
          2
        </div>
        
      </div>

      <UserCard
          name="ndamu"
          avatar="/avatar6@2x.png"
          messagecontent="Hi Ndamu, how are you?"
  
      />
      <UserCard
          name="ndamus"
          avatar="/avatar6@2x.png"
          messagecontent="Hi Ndamu, how are you?"
  
      />
 
      

      <img className={styles.buttonIcon} alt="" src="/button9@2x.png" />
    </div>
  );
};

export default Message;
