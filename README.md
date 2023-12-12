# pokemon-db

# Set up the file structure
In terminal:

inside your homework folder:

mkdir pokemon_app
cd pokemon_app
mkdir views
touch views/Index.jsx
touch views/Show.jsx
mkdir models
touch models/pokemon.js
touch server.js
touch .gitignore
npm init -y

# Install NPM packages
In terminal:

Make sure that you are on the same directory level as your package.json(why?)
npm i express
npm i jsx-view-engine react react-dom
check your package.json


# Set up your server
-In your server.jsfile, set up your server

require express
set express()to a variable
set a variable of portto 3000
set your app to listen to the port and include a console.log(), so that you can tell when your server is running
include a get route /that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
In terminal

nodemonor nodemon server.js(if you set your package.jsonto start server.jsyou do't need to put it after nodemon)

GOTCHA! : nodemon will only work if you run it from the same location as your package.json

# In the browser

go to localhost:3000
check that you have your Welcome to the Pokemon App!message displaying
