import React from "react";

const Home = () => {

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.homeHeader1}>Virtual Bartender</div>
        <div style={styles.homeHeader2}>MAKE YOURSELF A BARTENDER</div>
      </div>
      <div style={styles.homeBody}>
        <div style={styles.homeImg}>
          <img
            src="/images/Home.jpg"
            alt="Home"
            width="800"
            height="500"
          />
        </div>
        <div style={styles.homeBodyText}>
          Liquor enthusiastic?<br></br>
          Want to get some drinks?<br></br>
          Learn how to make mocktails and others?<br></br>
          <br></br>
          <br></br>
          It is our pleasure to assist you.<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          Blending things the right way<br></br>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    alignItem: 'center',
    width: '1920px',
    maxWidth: '95vw',
    padding: '0 2rem',
    margin: '0 auto',
  },
  homeHeader1: {
    fontSize: '2rem',
    margin: '2rem auto 2rem',
    //fontFamily: 'UltraBold',
  },
  homeHeader2: {
    fontSize: '1.75rem',
    margin: '2rem auto 2rem',
  },
  homeBody: {
    display: 'flex',
    margin: '0 16rem 3rem',
    justifyContent: 'center'
  },
  homeImg: {
    margin: '0 6rem 3rem',
  },
  homeBodyText: {
    margin: '5rem 0 auto',
    fontFamily: 'Light',
  }
}