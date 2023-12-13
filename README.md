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

# Set up your 'database'
You have created a file called pokemon.js
put the given array in pokemon.js
Set up your 'database' so that it can be exported to your server.jsand then be required by your server.js
Set this 'database' to a variable called pokemonin your server.jsfile
Create a get route /pokemonthat will res.send(pokemon), which will display your pokemon data as json in the browser

# Set up your index view

Instead of displaying json at your /pokemonroute, you should serve the Index.jsxfile you created that will display your pokemon
You will have to set up your jsx file

Start with your html boilerplate code
Add an <h1>that describes this page, i.e. 'See All The Pokemon!'
Try adding some inline styles:
We can add inline CSS, which are specified as attributes and are passed to the elements. These are specified as an object with a key as camelCased style name & value being the actual style value (and not as a string).

Change your /pokemonroute to res.renderyour Index.jsxfile
In your browser, go to localhost:3000/pokemonand be sure to see your Index.jsxview with an h1tag

# Set up your index view to show your pokemon data

Continue working on your Index.jsxview so that you can see:

The name of each pokemon, as a list item, inside an unordered list
This list should be dynamically rendered by jsx based on your data from your 'database'
You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names

# Setting up your show route

Inside your server.js, add a new get route /pokemon/:id
That will res.send(req.params.id);
So, when you go to localhost:3000/pokemon/whatever
whateverwill show up in the browser

# Link your Index.jsxto your Show.jsx

Inside your Index.jsx,

For each pokemon, add an <a>tag that will have an hrefthat goes to the route /pokemon/x, where x is the array position of the pokemonin the data array. This should be set dynamically with jsx
When you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

# Render your individual pokemon in the show view

Copy/paste your code from your Index.jsxinto your Sshow.jsx`
Change all your html code inside your Show.jsxfile so that

Your h1 tag says "Gotta Catch 'Em All"
Add an h2 tag that will display the name of the pokemon
Add an image tag that will display an image of the pokemon
Add an anchor tag with the text of back, that will take you back to your Index.jsxview
Update the route in the server.js to render the show view with the pokemon data