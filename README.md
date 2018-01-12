# Uniqey-Server

This is the backend part of the Uniqey Application.

The goal of this application is to generate unique identification numbers, or Uniqeys, based on the user's document types. These types are located in their Google Drive, in a folder called Uniqey-Folder. While this part of the application does not directly handle any of the Google API calls, it is resposible for communicating directly with the SQLite Database, as well as to provide end points for the client, the front end part of the application. It is also responsible for the actual unique ID creation.

This application is a node JS server, that uses express, sequelize, and CORS. Express is the main module being used in order to create the actual server, that listens on the port 3505. Sequelize is used in order to talk directly with the SQLite Database. CORS is used in order to bypass the Allow Origin Access error, when the client connects to the server, from a different port number.

The functions, or features of the server are split into 4 modules: Authentication, Display, Generation, Admin.
