import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contactHeader1}>Contact information</div>
      <div style={styles.contactBody}>
        <div style={styles.contactBodyText}>
          Phone/ Mobile number <br></br>
          123-456-789<br></br>
          <br></br>
          <hr></hr>
          Address <br></br>
          123 Anywhere St., Any City, ST 12345<br></br>
          <br></br>
          <hr></hr>
          E-mail Address <br></br>
          contact@virtualbartender.com<br></br>
        </div>
        <div style={styles.contactImg}>
          <img
            src="/images/Contact.jpg"
            alt="Contact"
            width="700"
            height="450"
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
  contactHeader1: {
    fontSize: '2rem',
    margin: '2rem auto 2rem',
  },
  contactBody: {
    display: 'flex',
    margin: '0 16rem 3rem',
    justifyContent: 'center'
  },
  contactImg: {
    margin: "0 6rem 3rem",
  },
  contactBodyText: {
    margin: '5rem 3rem auto',
  }
}
