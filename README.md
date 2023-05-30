# Dashboard

Overview:
The purpose of this project is to create a web application dashboard similar to Netvibes. The dashboard will be customizable and will integrate configurable widgets from different services. The project will use various technologies such as Node.js, Express, EJS, CSS, Docker, MongoDB, and NPM.

Technologies Used:
Node.js: Node.js is a lightweight web framework widely used by beginners and major companies like Netflix and Uber. It will be the foundation of the web application.
Express: Express is a flexible and minimal web application framework for Node.js. It provides essential features and tools for building web applications.
EJS (HTML/JS): EJS is a simple templating language that allows generating HTML markup using plain JavaScript. It will be used to generate dynamic content for the dashboard.
MongoDB: MongoDB is a leading NoSQL database that stores data in a document-oriented format. It will be used as the database for this project.
Compilation:
To compile the project, run the command "docker-compose up" in the terminal. This command will start the necessary Docker containers and launch the web application.

Routes of the Node.js Project:

/: This route will display the welcome page.
/dashboard: Accessing this route will display the dashboard page.
/about.json: Accessing this route will retrieve the about.json page.
/users/login: This route will display the login page for user authentication.
/users/register: Accessing this route will display the register page for user registration.
/auth: This route is used for authenticating with Google.
/stories: Accessing this route will redirect to the Unsplash service.
/weather: Accessing this route will redirect to the weather service.
/youtube: Accessing this route will redirect to the YouTube service.
/spotify: Accessing this route will redirect to the Spotify service.
/display: Accessing this route will redirect to the services display page.
Services and Widgets:
The web application provides integration with the following services and widgets:

Weather:

This widget allows users to get weather information about any city, including temperature, humidity, and weather description.
Unsplash:

This widget enables users to retrieve an image from Unsplash, which is a platform for free-to-use photos.
Spotify:

Users can search for an artist's ID and retrieve data about the artist or visit their Spotify page.
YouTube:

Users can search for a YouTuber and view the corresponding channel, including the number of followers. They can also visit the YouTuber's YouTube page.
Widget Customization and Actions:

Users can edit, delete, or move widgets, specifically the Unsplash and Weather widgets, using keyboard keys.
The web application provides a logout button on the main dashboard page for user logout functionality.
Additional Actions:
The application utilizes Chai, a BDD/TDD assertion library, for testing purposes. Chai is compatible with both Node.js and browser environments and can be paired with various JavaScript testing frameworks.
