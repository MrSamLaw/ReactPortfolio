import SS01 from "./assets/images/ANZ-Travel-Bubble-Landing.png"
import SS02 from "./assets/images/AutoMate.png"
import SS03 from "./assets/images/Olympia.png"
import SS04 from "./assets/images/JnR108.png"
import SS05 from "./assets/images/Tech-Blog.png"
import SS06 from "./assets/images/WeatherDashboard.png"
import SS07 from "./assets/images/DayPlanner.png"
import SS08 from "./assets/images/eCommerce.png"
import SS09 from "./assets/images/Note-Taker.png"
import SS10 from "./assets/images/PWGen.png"

export const projectData = [
    {
        title: "ANZAC Bubble Travel App",
        description: "A dynamic, user friendly, and convenient travel and accomodation finder for Australians that are keen to visit our New Zealand neighbours!",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS", "APIs"],
        repo: "https://github.com/MrSamLaw/07-ANZAC-Bubble-Travel-App",
        URL: "https://mrsamlaw.github.io/07-ANZAC-Bubble-Travel-App/",
        screenshot: SS01,
        featured: false,
    },
    {
        title: "AutoMate",
        description: "A developing CRM for Automotive Workshops",
        tech: ["CSS", "JavaScript", "Bootstrap", "SQL", "Node.js", "Express", "Sequelize", "Handlebars", "DotEnv", "Heroku"],
        repo: "https://github.com/MrSamLaw/AutoMate",
        URL: "https://p2-automate.herokuapp.com/",
        screenshot: SS02,
        featured: false,
    },
    {
        title: "Olympia",
        description: "A Fitness Tracker",
        tech: ["CSS", "JavaScript", "MongoDB", "Node.js", "Express", "Mongoose", "DotEnv", "Heroku"],
        repo: "https://github.com/MrSamLaw/Olympia",
        URL: "https://sl-olympia.herokuapp.com/",
        screenshot: SS03,
        featured: true,
        featuredText: "The front end site and seed data was provided. We refactored the front end for user experience, amended the units and added minor validation around adding null data. \nWe built the backend from the MongoDB models, api & html routes to the server connection allowing us to deploy to Heroku, utilising MongoDB Atlas to host our data.",
    },
    {
        title: "JnR108",
        description: "A Budget Tracker for when you're on the go!",
        tech: ["CSS", "JavaScript", "MongoDB", "IndexedDB", "Node.js", "Express", "Mongoose", "DotEnv", "Heroku"],
        repo: "https://github.com/MrSamLaw/JnR108",
        URL: "https://sl-jnr108.herokuapp.com/",
        screenshot: SS04,
        featured: false,
    },
    {
        title: "Talkin' Tech Tech Blog",
        description: "a CMS style Blog with the ability for multiple authors to write posts as well as comment on them.",
        tech: ["Node.js", "Express", "Express Sessions", "Sequelize", "Handlebars", "BCrypt", "DotEnv", "JAWSDB", "Bootstrap"],
        repo: "https://github.com/MrSamLaw/Tech-Blog",
        URL: "https://sl-tech-blog.herokuapp.com/",
        screenshot: SS05,
        featured: false,
    },
    {
        title: "Everyweather You Go! - Weather Dashboard",
        description: "A weather dashboard that uses API calls to determine the weather of a city",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS", "API"],
        repo: "https://github.com/MrSamLaw/06-WeatherDashboard",
        URL: "https://mrsamlaw.github.io/06-WeatherDashboard/",
        screenshot: SS06,
        featured: false,
    },
    {
        title: "Harder Better Faster Stronger - Work Day Planner",
        description: "A way to efficiently manage your work time - an app to plan out your work day hour by hour",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Moment JS"],
        repo: "https://github.com/MrSamLaw/WorkDayPlanner",
        URL: "https://mrsamlaw.github.io/WorkDayPlanner/",
        screenshot: SS07,
        featured: false,
    },
    {
        title: "E-Commerce Backend",
        description: "The back-end for an e-Commerce site",
        tech: ["Node.js", "Express", "DotEnv", "Sequelize", "SQL"],
        repo: "https://github.com/MrSamLaw/E-Commerce-Backend",
        URL: "#",
        screenshot: SS08,
        featured: false,
    },
    {
        title: "Note-Taker",
        description: "An express Note-Taker",
        tech: ["Node.js", "Express"],
        repo: "https://github.com/MrSamLaw/Note-Taker",
        URL: "https://desolate-reef-25794.herokuapp.com/",
        screenshot: SS09,
        featured: false,
    },
    {
        title: "Password Generator",
        description: "An application that enables employees to generate random passwords based on criteria that they’ve selected",
        tech: ["HTML", "CSS", "JavaScript"],
        repo: "https://github.com/MrSamLaw/PWGenerator",
        URL: "https://mrsamlaw.github.io/PWGenerator/",
        screenshot: SS10,
        featured: false,
    }
]