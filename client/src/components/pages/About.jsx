import React from "react";

// render About page (https://virtual-bartender1.herokuapp.com/#/about)
const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>Relive your passion</div>
      <div style={styles.body}>
        <div>Are you a cocktail lover, a drink enthusiast, or just simply a person eager to learn how to make some refreshing drinks?</div>
        <br></br>
        <div>Then our website is for YOU!</div>
        <br></br>
        <div>Our service serves as an excellent tool for managing liquors and bar ingredients.
          Give us what ingredients in your home and receive possible amazing recipes to make both alcoholic and non-alcoholic beverages.
          Follow easiest step-by-step instructions, taste your drink and don't forget share your favorite recipes on social media.
        </div>
      </div>
      <div style={styles.img}>
        <div>
          <img
            src="/images/About-1.jpg"
            alt="About-1"
            width="200"
            height="200"
          />
          <p>COCKTAILS AND OTHER RECIPES</p>
        </div>
        <div>
          <img
            src="/images/About-2.jpg"
            alt="About-2"
            width="200"
            height="200"
          />
          <p>BLENDING YOUR SPIRIT WITH OURS</p>
        </div>
        <div>
          <img
            src="/images/About-3.jpg"
            alt="About-3"
            width="200"
            height="200"
          />
          <p>ALCOHOLIC AND NON-ALCOHOLIC DRINKS</p>
        </div>
      </div>
    </div>
  );
};

export default About;

const styles = {
  container: {
    alignItem: 'center',
    width: '1920px',
    maxWidth: '95vw',
    padding: '0 2rem',
    margin: '0 auto',
  },
  header: {
    fontSize: '2rem',
    margin: '2rem auto 1rem',
  },
  body: {
    margin: 'auto',
    width: '1000px',
    textAlign: 'left',
    justifyContent: 'center'
  },
  img: {
    margin: '2rem auto',
    display: 'flex',
    columnGap: '75px',
    justifyContent: 'center'
  },
}
