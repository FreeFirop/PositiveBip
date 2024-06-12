// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.use(bodyParser.json());

app.post('/api/create-server', (req, res) => {
    const serverName = req.body.serverName;
    // Create the server directory and run Minecraft server command
    exec(`mkdir ${serverName} && cd ${serverName} && java -jar minecraft_server.jar nogui`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error creating server: ${error}`);
            return res.status(500).send('Error creating server');
        }
        console.log(`Server created: ${stdout}`);
        res.send('Server created successfully');
    });
});

app.post('/api/start-server', (req, res) => {
    const serverName = req.body.serverName;
    // Start the Minecraft server
    exec(`cd ${serverName} && java -jar minecraft_server.jar nogui`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting server: ${error}`);
            return res.status(500).send('Error starting server');
        }
        console.log(`Server started: ${stdout}`);
        res.send('Server started successfully');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
