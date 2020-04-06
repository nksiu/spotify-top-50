# Welcome
Hello and thank you for checking out my project!
This project is up on http://spotify-top-50.herokuapp.com/

This application was created using React and Redux for the frontend and Express for the backend
In order to obtain the songs, the Spotify Web API is called

## Running Locally
Please follow the steps in order to run this project locally:

### Register the Web Application as a Spotify Developer
1. Create a Spotify Account if you do not have one already
2. Go to https://developer.spotify.com/dashboard/ and login
3. Click "CREATE A CLIENT ID" and fill out all the necessary information
4. Note down the values of "Client ID" and "Client Secret" for the application
5. Click "EDIT SETTINGS" and add http://localhost:5000/callback under "Redirect URIs" then click "SAVE"

### Cloning and Installing Dependencies
1. Clone this repository. e.g. `git clone git@github.com:nksiu/spotify-top-50.git` in your terminal
2. Run `npm i`
3. Run `npm i --prefix backend` 
4. Find the .env-template file in the "backend" folder and change the placeholders in the file to the values of "Client ID" and "Client Secret" you previously noted down
5. Rename the .env-template file to .env
6. Run `npm run dev`
7. If no tab pops up automatically, navigate to http://localhost:3000/

Congratulations, you have succesfully setup this application locally!
