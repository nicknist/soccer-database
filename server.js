//As I moved all the routes into the app.js file, I have also annotated that file

//imports the app file
import app from './app';

//This line sets the 'port' of the project. If there is an environment, then the port will run on it and if not, it will be set at port 3000 (localhost)
app.set('port', process.env.PORT || 3000);

//this first line sets up the server to listen for commands and essentially wait. The first argument is the port number/where it is, and then it takes a callback function
app.listen(app.get('port'), () => {
  //we are now console logging in the terminal that the server is running and on what port it is running on
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);

//This closes the app.listen function
});
