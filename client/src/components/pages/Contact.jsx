import React from "react";

// render Contact page (https://virtual-bartender1.herokuapp.com/#/contact)
const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header1}>Contact Us</div>
      <div style={styles.header2}>LET'S GET IN TOUCH</div>
      <div style={styles.body}>
        <div style={styles.bodyText}>
          <b>Phone/ Mobile number</b><br></br>
          123-456-789<br></br>
          <br></br>
          <hr></hr>
          <b>Address</b><br></br>
          123 Anywhere St., Any City, ST 12345<br></br>
          <br></br>
          <hr></hr>
          <b>E-mail Address</b><br></br>
          contact@virtualbartender.com<br></br>
        </div>
        <div style={styles.img}>
          <img
            src="/images/Contact.jpg"
            alt="Contact"
            width="600"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
    margin: '0 16rem 3rem',
    justifyContent: 'center'
  },
  img: {
    margin: "0 6rem 3rem",
  },
  bodyText: {
    margin: '5rem 3rem auto',
  }
}
