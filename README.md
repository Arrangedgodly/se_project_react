# WTWR - What to Wear

## Project Description
WTWR is a webpage that detects the local weather for your area and recommends 'What to Wear', displaying a custom list of interactive clothing for the user to select from. It also features a helpful web infographic that pulls the current time and weather of the user, and gives a custom graphic to fit the situation appropriately.

## Project Technologies
WTWR is my first major project utilizing **React**. It features **RESTful API calls** to weatherapi.com, and utilizes ternary operators/conditional rendering to display the correct content based on the users conditons.

## Link to Project
This project can be found at [this link](https://graydonwasil.students.nomoredomainssbs.ru/)

## Version Tracker
- 1.1
  * The back end for the project was attached and integrated into the project. All API calls are run to localhost:3001, and allow for storage of the various data pieces on MongoDB. All previously hardcoded pieces of data are now live updated with the API calls. The repository containing the backend can be found at [se_project_express](https://github.com/Arrangedgodly/se_project_express/)
- 1.0
    * The webpage's initial release state. So far, only 6 pieces of clothing are hard coded into the page via a JSON object, and location data is only pulled from Denver, Colorado. User information and profile picture are hard coded as well.