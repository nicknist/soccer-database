//imported dat cors latte
import cors from 'cors';
//getting the express function out of the library
const express = require('express');
//initiate the app from the express function
const app = express();
//brought in the regerenerator runtime in order to make the test suite run faster and recognize some of the functionality
import regeneratorRuntime from "regenerator-runtime";

//this creates our environment variable, if there is a node environment it will use that. If not, it will make a development file
const environment = process.env.NODE_ENV || 'development';
//this makes our configuration, which basically combines our knex file and our environment so that it is setup the right way
const configuration = require('./knexfile')[environment];
//with the configuration and then knex library, we create our database... dope
const database = require('knex')(configuration);

//set the title of our 'app' and put it in the locals object
app.locals.title = 'Soccer Stats';

//when requests come through, this makes sure that they all roll through as json information
app.use(express.json());

//this is going to define the route to find the teams. it will be async and take in a request and response
app.get('/api/v1/teams', async (request, response) => {
  //TRY IT OUT
  try {
    //this will go into the database and find all of the teams. and wait for it
    const teams = await database('teams').select();
    //knowing this it was successful, this will send back a status code of 200 with all of the teams that were found from the database
    response.status(200).json(teams);
    //CATCH DAT ERROR
  } catch (error) {
    //send back 500 response code with the error
    response.status(500).json({ error });
  }
});

//this is going to define the route to GET the matches. it is asynce and will take in a request and a response
app.get('/api/v1/matches', async (request, response) => {
  //TRY IT OUT
  try {
    //this will go into the database created earlier and get all of the matches
    const matches = await database('matches').select();
    //this will send back a 200 response code with all the matches
    response.status(200).json(matches);
    //CATCH DAT ERROR
  } catch (error) {
    //this will send back a 500 response code when the server is down. with the error
    response.status(500).json({ error });
  }
});

//this will set up the route to GET a specific team based on their id. the callback function is async and takes in a request and a response
app.get('/api/v1/teams/:id', async (request, response) => {
  //TRY IT OUT
  try {
    //this will find the specific team in the database based on the url that you send in
    const team = await database('teams').where({ id: request.params.id })
    //if the database did not find a team with that id
    if (!team[0]) {
      //send back a 404 error with a 'team not found' error
      response.status(404).json({ error: 'Team not found' });
      //ELSE
    } else {
      //send back a 201 success code with the team that the database found
      response.status(201).json(team[0]);
    }
    //CATCH DAT ERROR
  } catch (error) {
    //send back 500 response code with the error
    response.status(500).json({ error });
  }
});

//set up the route to find a specific match based on id. It will take an async callback function that takes in a request and a response
app.get('/api/v1/matches/:id', async (request, response) => {
  //TRY IT OUT
  try {
    //this will go into the database and find the match that matches the id in the url
    const match = await database('matches').where({ id: request.params.id });
    //if the database did not find a match
    if (!match[0]) {
      //send back a 404 with the error of 'match not found'
      response.status(404).json({ error: 'Match not found' });
      //ELSE
    } else {
      //send back a successful 201 code with the match that the database found
      response.status(201).json(match[0]);
    }
    //CATCH DAT ERROR
  } catch (error) {
    //send back a 500 response code with the error that the server is down
    response.status(500).json({ error });
  }
});

//this is going to set up the POST call to post a new team. It takes a callback function with a request and a response
app.post('/api/v1/teams', async (request, response) => {
  //GET DAT TEAM. from the request body
  const team = request.body

  //setup a for loop to check every part of the request body and set that to a variable of requiredParameter
  for (let requiredParameter of ['name', 'league', 'rank', 'spi']) {
    //the for loop goes through each key in the array and will make sure that every key in requiredParameter is there. if not, roll into this response
    if (!team[requiredParameter]) {
      //return dat ish
      return response
      //gimme that 422 code of inprocessible entry
        .status(422)
        //this is what you sending. the expected format and what's missing
        .send({ error: `Expected format: {
          name: <String>,
          league: <String>,
          rank: <Number>,
          spi: <Number>
        }. You're missing a "${requiredParameter}" property.`})
    }
  }

  //TRY IT OUT
  try {
    //assuming we made it through the ringer and all the params are there, now we're going to insert the new team and get back an id of the new team
    const id = await database('teams').insert(team, 'id');
    //we are going to send back a 201 code with the new teams' id
    response.status(201).json({ id: id[0] });
    //CATCH DAT ERROR
  } catch (error) {
    //when the server is down, send a 500 code with that error
    response.status(500).json({ error });
  }
});

//this sets up the POST matches route. it takes in an async callback with a request and a response
app.post('/api/v1/matches', async (request, response) => {
  //GET DAT MATCH. from the request body
  const match = request.body;

  //set up a for loop that will take in an array of requiredParameters and run to check each one
  for (let requiredParameter of ['date', 'team1_name', 'team1_score', 'team2_name', 'team2_score']) {
    //if one of the parameters is not in the match object, then RUN IT
    if (!match[requiredParameter]) {
      //gimme dat response
      return response
      //send back the 422 inprocessible entry code
      .status(422)
      //give a nice error that tells us which part of the requirements that those dang front enders missed
      .send({ error: `Expected format: {
        date: <String>,
        team1_name: <String>,
        team1_score: <String>,
        team2_name: <String>,
        team2_score: <String>
      }. You're missing a "${requiredParameter}" property.`})
    }
  }

  //TRY IT OUT
  try {
    //we made it this far, put that new match object into the database, and keep that id as a variable
    const id = await database('matches').insert(match, 'id');
    //send back a 201 code with just the id of the new match
    response.status(201).json({ id: id[0] });
    //CATCH DAT ERROR
  } catch (error) {
    //send back a 500 code when the backend has exploded
    response.status(500).json({ error });
  }
});

//set up the DELETE route to delete a match based on the id. take in an async callback function with a request and a repsonse
app.delete('/api/v1/matches/:id', async (request, response) => {
  //TRY IT OUT
  try {
    //wait for the database to delete the match where the id matches the url
    await database('matches').where({ id: request.params.id }).del();
    //send back a successful 204 response code with nothing in the body
    response.status(204).json();
    //CATCH DAT ERROR
  } catch (error) {
    //send back a 500 code with the error when the backend has exploded
    response.status(500).json({ error });
  }
})

//EXPORT IT ALL
export default app;
