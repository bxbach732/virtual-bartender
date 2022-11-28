# virtual-bartender

Virtual bartender is an application where you can add ingredients to your shelf, and the page shows what recipes you can create. You can also view all of the recipes individually in a list. The website uses passwordless login done with oauth.

# Technology choices

Virtual bartender is a MERN stack application done for the course Design of WWW Services at Aalto University.
MERN means that MongoDB is used as the database, express and node are running the back-end server and react does all of the front-end. Material UI was used for the styling and responsiveness of the site.

# Installation guidelines

To start, you need to to configure the .env file. Create a file called .env in the root directory of the project, the .env needs to have the variables specified in the .example.env file.

This file is not tracked to github because it contains the secret that is used for database access.

After setting the values, you will need to install the dependency packages. Run the following command in the root directory, and wait for the install to finish.

- npm install

After installing:
To run in locally, you need to have docker daemon online and then run:

- docker-compose build
- docker-compose up

To create a production build run:

- npm run build
- npm run start
