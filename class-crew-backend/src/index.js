require('dotenv').config(); // loads env variables

const pino = require('pino');
const mongoose = require('mongoose');

const app = require('./app');
const { connectMongoose } = require('./loaders/mongoose') // loader to connect to mongoose

//logger pino 
const logger = pino({
    level: process.env.LOG_LEVEL || 'info'
});

const PORT = process.env.PORT || 4000;

async function start() {
    try {
        logger.info("Starting class_crew backend...");
        
        //connect to mongo
        await connectMongoose(process.env.MONGO_URI);
        logger.info("Connected to MongoDB");

        // start the server
        const server = app.listen(PORT, () => {
            logger.info({port: PORT}, 'Http server listening');
        });

        //Graceful shutdown to helper
        const gracefulShutdown = async (signal) => {
            logger.info({signal}, 'Received shutdown signal');
        }

    }
    catch(err) {

    }
}
