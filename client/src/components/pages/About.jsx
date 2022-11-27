import React from "react";

const About = () => {

  return (
    <div style={styles.container}>
      <div style={styles.aboutHeader}>Relive your passion</div>
      <div style={styles.aboutBody}>
        <div>Are you a cocktail lover, a drink enthusiast, or just simply a person eager to learn how to make some refreshing drinks?</div>
        <br></br>
        <div>Then our website is for YOU!</div>
        <br></br>
        <div>Our service serves as an excellent tool for managing liquors and bar ingredients.
          Give us what ingredients in your home and receive possible amazing recipes to make both alcoholic and non-alcoholic beverages.
          Follow easiest step-by-step instructions, taste your drink and don't forget share your favorite recipes on social media.
        </div>
      </div>
      <div style={styles.aboutImg}>
        <div>
          <img
            src="/images/About-1.jpg"
            alt="About-1"
            width="250"
            height="250"
          />
          <p>COCKTAILS AND OTHER RECIPES</p>
        </div>
        <div>
          <img
            src="/images/About-2.jpg"
            alt="About-2"
            width="250"
            height="250"
          />
          <p>BLENDING YOUR SPIRIT WITH OURS</p>
        </div>
        <div>
          <img
            src="/images/About-3.jpg"
            alt="About-3"
            width="250"
            height="250"
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
  },
  aboutHeader: {
    fontSize: '3rem',
    margin: '3rem auto 3rem',
  },
  aboutBody: {
    margin: 'auto',
    width: '1000px',
    textAlign: 'left',
    justifyContent: 'center'

  },
  aboutImg: {
    margin: '5rem auto',
    display: 'flex',
    columnGap: '120px',
    justifyContent: 'center'
  },
}
