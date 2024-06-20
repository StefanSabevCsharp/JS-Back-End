const express = require('express');
const handlebars = require('express-handlebars');
const { configExpress } = require('./config/configExpress');
const { configHandlebars } = require('./config/configHandlebars');
const { configDB } = require('./config/configDB');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 3000;

configExpress(app);
configHandlebars(app);

app.use(homeController);

async function startServer() {
    try {
        await configDB();
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server', error);
    }
}
startServer();








