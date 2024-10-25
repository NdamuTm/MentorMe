import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.heading}>
        <Link className={styles.link} to="/menu">
          <div className={styles.linkChild} />
          <img className={styles.buttonIcon} alt="" src="/button1@2x.png" />
        </Link>
        <Link className={styles.link1} to="/profile">
          <img
            className={styles.profilePicIcon}
            alt=""
            src="/profilepic@2x.png"
          />
        </Link>
      </div>
      <div className={styles.searchBox}>
        <button className={styles.link2} id="search">
          <div className={styles.linkItem} />
          <img
            className={styles.adjustHorizontalAltIcon}
            alt=""
            src="/adjusthorizontalalt@2x.png"
          />
        </button>
        <input
          className={styles.searchBoxChild}
          name="search"
          id="search"
          type="text"
        />
        <input
          className={styles.searchForTutors}
          name="search"
          id="search"
          placeholder="Search for Tutors Here..."
          type="text"
        />
      </div>
      <section className={styles.popularTutors}>
        <div className={styles.recentTutors}>Popular Tutors</div>
        <div className={styles.showAll}>Show All</div>
        <div className={styles.popularTutorsSlider} id="popular-tutors-slider">
          <div className={styles.userCard} id="user-card">
            <div className={styles.userCardChild} />
            <img
              className={styles.profileIcon}
              alt=""
              src="/profileicon@2x.png"
            />
            <div className={styles.michaelNdlovu}>Michael Ndlovu</div>
            <div className={styles.johannesburgSouthAfrica}>
              Johannesburg, South Africa
            </div>
            <div
              className={styles.financeAccounting}
            >{`Finance & Accounting`}</div>
            <img className={styles.likeBtnIcon} alt="" src="/likebtn@2x.png" />
          </div>
          <div className={styles.userCard1} id="user-card">
            <div className={styles.userCardChild} />
            <img className={styles.likeBtnIcon} alt="" src="/likebtn@2x.png" />
            <div className={styles.profileIcon1}>
              <div className={styles.profileIconChild} />
            </div>
            <div className={styles.emilyMokoena}>Emily Mokoena</div>
            <div className={styles.capeTownSouth}>Cape Town, South Africa</div>
            <div
              className={styles.financeAccounting}
            >{`IT & Software Development`}</div>
          </div>
        </div>
      </section>
      <section className={styles.recent}>
        <div className={styles.recentTutors}>Recent Tutors</div>
        <div className={styles.showAll1}>Show All</div>
        <div className={styles.recentUserList}>
          <div className={styles.recentUserListChild} />
          <div className={styles.facebook}>
            <div className={styles.facebookChild} />
          </div>
          <div className={styles.sarahDlamini}>Sarah Dlamini</div>
          <div
            className={styles.marketingAdvertising}
          >{`Marketing & Advertising`}</div>
          <div className={styles.peerMentor}>Peer Mentor</div>
        </div>
        <div className={styles.recentUserList1}>
          <div className={styles.recentUserListChild} />
          <div className={styles.facebook}>
            <div className={styles.spotifyChild} />
          </div>
          <div className={styles.sarahDlamini}>Daniel Kgomo</div>
          <div
            className={styles.marketingAdvertising}
          >{`Engineering & Architecture`}</div>
          <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
          <div className={styles.industryExpert}>Industry Expert</div>
        </div>
        <div className={styles.recentUserList2}>
          <div className={styles.recentUserListChild} />
          <div className={styles.facebook}>
            <div className={styles.spotifyItem} />
          </div>
          <div className={styles.sarahDlamini}>Rebecca Nkosi</div>
          <div
            className={styles.marketingAdvertising}
          >{`Healthcare & Nursing`}</div>
          <div className={styles.seniorMentor}>Senior Mentor</div>
        </div>
      </section>
      <section className={styles.navigation}>
        <div className={styles.shadow} />
        <footer className={styles.navigationChild} />
        <img
          className={styles.menuIndicatorIcon}
          alt=""
          src="/menuindicator@2x.png"
        />
        <img className={styles.linkIcon} alt="" src="/link@2x.png" />
        <button className={styles.link3}>
          <img className={styles.chatIcon} alt="" src="/chat@2x.png" />
          <div className={styles.message}>Message</div>
        </button>
        <button className={styles.link4}>
          <img className={styles.settingIcon} alt="" src="/setting@2x.png" />
          <div className={styles.setting}>Setting</div>
        </button>
        <button className={styles.link5}>
          <img className={styles.profileIcon2} alt="" src="/profile@2x.png" />
          <div className={styles.message}>Profile</div>
        </button>
      </section>
      <img className={styles.avatarIcon1} alt="" src="/avatar1@2x.png" />
      <img className={styles.avatarIcon2} alt="" src="/avatar2@2x.png" />
      <img className={styles.avatarIcon3} alt="" src="/avatar3@2x.png" />
      <img className={styles.avatarIcon4} alt="" src="/avatar4@2x.png" />
    </div>
  );
};

export default Home;
