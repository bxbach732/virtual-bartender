import React from "react";

// render Home page (https://virtual-bartender1.herokuapp.com/#/)
const Home = () => {
  return (
    <div style={styles.container}>
      <div>
        <div style={styles.header1}>Virtual Bartender</div>
        <div style={styles.header2}>MAKE YOURSELF A BARTENDER</div>
      </div>
      <div style={styles.body}>
        <div>
          <img
            src="/images/Home.jpg"
            alt="Home"
            width="550"
            height="390"
          />
        </div>
        <div style={styles.bodyText}>
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
  header1: {
    fontSize: '2rem',
    margin: '2rem auto 1rem',
  },
  header2: {
    fontSize: '1.75rem',
    margin: '1rem auto 1rem',
    fontFamily: 'Light',
  },
  body: {
    display: 'flex',
    margin: '0 12rem 3rem',
    justifyContent: 'center',
    columnGap: '25px'
  },
  bodyText: {
    margin: '3rem 0 0',
    fontFamily: 'Light',
  }
}