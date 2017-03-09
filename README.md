# Puppy Profiles

## Live Demo

An online build can be found [here](https://puppy-profiles.herokuapp.com).

## How-to

* Anyone can see users' profiles. Clicking on a profile from the main page takes you to the user's profile page, and allows you to see their description.

* Sign up or log in locally or via Google OAuth.

* If you're logged in, you're able to edit your own profile, and all changes will of course be saved to the database if you save them. If you're not logged in and you attempt to edit your own profile (the only means to do that right now is by hitting the URL directly), you'll be presented with a message informing you that you need to be.

## ...but why?

I was given the task of creating a simple app where users could create a profile, edit their profile, and view the profiles that other users created. In search for material to seed my database with, I decided to make those users dogs. (Because one, who doesn't like looking at cute dogs, and two, cute dogs make the frustrating parts of programming much more fun.)

Not coincidentally, if you've been looking for a furry companion, all of the dogs on the live site are available for adoption at [Austin Pets Alive!](https://www.austinpetsalive.org/) (As of 3/7.)

## Architecture

Puppy Profiles is built on Node.js, Express for back-end routing, MongoDB and Mongoose for the database and object modeling, and React for front-end views and render logic.

## Installation

To install Puppy Profiles on your computer, you'll need [Node.js with NPM](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/), and [Google OAuth 2.0](https://developers.google.com/identity/protocols/OAuth2) set up.

### Node.js with NPM

Once you have Node.js with NPM, install the app's dependencies by executing the following command:

```
npm install
```

### Secrets

Create a `.env` file in the root directory. Add the following key-value pairs:

```
SESSION_SECRET=your_session_secret_here
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

(Don't put quotes around each value.)

In order to obtain a Google Client ID & secret, follow the steps [here](https://support.google.com/cloud/answer/6158849?hl=en). You'll also need to enable the [Google+ API](https://developers.google.com/+/web/api/rest/).

### MongoDB

When the dependencies have been installed and your `.env` file has been configured, open a terminal window and start MongoDB with the following command:

```
mongod
```

### Start!

Then run the webpack build process in a different terminal window:

```
npm run build-watch
```

And start the server with the following command in yet *another* terminal window:

```
npm start
```

The app will then be accessible at http://localhost:3000.

## Need Help or Want to Contribute?

Create an [issue](https://github.com/bethqiang/puppy-profiles/issues) or submit a pull request if you need help, find a bug, or have suggestions for improvement.
